import { render } from '@react-email/render';
import React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';
import SnykYearInReviewEmail from '../emails/V3YearlyWrapped';

/**
 * CSV Format:
 * email,year,vulnerabilitiesFixed,projectsScanned,totalScans,topProjectName,topProjectVulnerabilities,mostActiveMonth,mostActiveMonthScans,securityPercentile
 * 
 * Note: linkedInShareUrl and xShareUrl are configured via .env variables (LINKEDIN_SHARE_URL and X_SHARE_URL)
 * Note: Static fields (ceoName, ceoTitle, ceoImageUrl, ceoSignatureUrl, offerCtaUrl) are hardcoded in the email template
 */

interface RecipientData {
  email: string;
  year?: number;
  vulnerabilitiesFixed?: number;
  projectsScanned?: number;
  totalScans?: number;
  topProjectName?: string;
  topProjectVulnerabilities?: number;
  mostActiveMonth?: string;
  mostActiveMonthScans?: number;
  securityPercentile?: number;
}

function validateEnvVars(): void {
  const required = ['MAILGUN_API_KEY', 'MAILGUN_DOMAIN', 'MAILGUN_FROM_EMAIL', 'MAILGUN_FROM_NAME'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`   - ${key}`));
    process.exit(1);
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function parseCSV(filePath: string): RecipientData[] {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ CSV file not found: ${filePath}`);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(filePath, 'utf-8');
  
  try {
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    return records.map((record: any) => {
      return {
        email: record.email,
        year: record.year ? parseInt(record.year, 10) : undefined,
        vulnerabilitiesFixed: record.vulnerabilitiesFixed ? parseInt(record.vulnerabilitiesFixed, 10) : undefined,
        projectsScanned: record.projectsScanned ? parseInt(record.projectsScanned, 10) : undefined,
        totalScans: record.totalScans ? parseInt(record.totalScans, 10) : undefined,
        topProjectName: record.topProjectName || undefined,
        topProjectVulnerabilities: record.topProjectVulnerabilities ? parseInt(record.topProjectVulnerabilities, 10) : undefined,
        mostActiveMonth: record.mostActiveMonth || undefined,
        mostActiveMonthScans: record.mostActiveMonthScans ? parseInt(record.mostActiveMonthScans, 10) : undefined,
        securityPercentile: record.securityPercentile ? parseInt(record.securityPercentile, 10) : undefined,
      };
    });
  } catch (error: any) {
    console.error('❌ Error parsing CSV file:', error.message);
    process.exit(1);
  }
}

async function sendEmail(
  recipient: RecipientData,
  html: string,
  apiKey: string,
  domain: string,
  fromEmail: string,
  fromName: string,
  subject: string
): Promise<boolean> {
  try {
    // Validate email address
    if (!validateEmail(recipient.email)) {
      console.error(`❌ Invalid email address: ${recipient.email}`);
      return false;
    }

    const form = new FormData();
    form.append('from', `${fromName} <${fromEmail}>`);
    form.append('to', recipient.email);
    form.append('subject', subject);
    form.append('html', html);

    const auth = Buffer.from(`api:${apiKey}`).toString('base64');
    const url = `https://api.mailgun.net/v3/${domain}/messages`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
      },
      body: form,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`❌ Failed to send email to ${recipient.email}:`, response.status, errorText);
      return false;
    }

    const result = await response.json();
    console.log(`✅ Email sent to ${recipient.email} (ID: ${result.id})`);
    return true;
  } catch (error: any) {
    console.error(`❌ Error sending email to ${recipient.email}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting email sending process...\n');

  // Validate environment variables
  validateEnvVars();

  const apiKey = process.env.MAILGUN_API_KEY!;
  const domain = process.env.MAILGUN_DOMAIN!;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL!;
  const fromName = process.env.MAILGUN_FROM_NAME!;
  const subject = process.env.EMAIL_SUBJECT || `Your ${new Date().getFullYear()} Snyk Wrapped - See your security stats`;
  const csvPath = process.env.CSV_PATH || path.join(__dirname, '../recipients.csv');
  const linkedInShareUrl = process.env.LINKEDIN_SHARE_URL;
  const xShareUrl = process.env.X_SHARE_URL;

  // Parse CSV
  console.log(`📄 Reading recipients from: ${csvPath}`);
  const recipients = parseCSV(csvPath);
  console.log(`📧 Found ${recipients.length} recipient(s)\n`);

  if (recipients.length === 0) {
    console.error('❌ No recipients found in CSV file');
    process.exit(1);
  }

  // Process each recipient
  let successCount = 0;
  let failureCount = 0;

  for (const recipient of recipients) {
    console.log(`📨 Processing: ${recipient.email}`);

    try {
      // Render email template
      // Note: Static fields (ceoName, ceoTitle, ceoImageUrl, ceoSignatureUrl, offerCtaUrl) 
      // are hardcoded as defaults in the email template component
      const html = await render(
        React.createElement(SnykYearInReviewEmail, {
          year: recipient.year,
          vulnerabilitiesFixed: recipient.vulnerabilitiesFixed,
          projectsScanned: recipient.projectsScanned,
          totalScans: recipient.totalScans,
          topProjectName: recipient.topProjectName,
          topProjectVulnerabilities: recipient.topProjectVulnerabilities,
          mostActiveMonth: recipient.mostActiveMonth,
          mostActiveMonthScans: recipient.mostActiveMonthScans,
          securityPercentile: recipient.securityPercentile,
          linkedInShareUrl: linkedInShareUrl,
          xShareUrl: xShareUrl,
        })
      );

      // Send email
      const success = await sendEmail(
        recipient,
        html,
        apiKey,
        domain,
        fromEmail,
        fromName,
        subject
      );

      if (success) {
        successCount++;
      } else {
        failureCount++;
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error: any) {
      console.error(`❌ Error processing ${recipient.email}:`, error.message);
      failureCount++;
    }

    console.log(''); // Empty line for readability
  }

  // Summary
  console.log('📊 Summary:');
  console.log(`   ✅ Successfully sent: ${successCount}`);
  console.log(`   ❌ Failed: ${failureCount}`);
  console.log(`   📧 Total: ${recipients.length}`);

  if (failureCount > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
