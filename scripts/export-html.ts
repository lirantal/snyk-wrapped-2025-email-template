import { render } from '@react-email/render';
import React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import SnykYearInReviewEmail from '../emails/V3YearlyWrapped';

async function exportHTML() {
  try {
    // Render the email with sample data
    const html = await render(
      React.createElement(SnykYearInReviewEmail, {
        year: 2025,
        vulnerabilitiesFixed: 310,
        monitoredTests: 857,
        securityPercentile: 1,
        ceoName: 'Peter McKay',
        ceoTitle: 'CEO',
        ceoMessage: 'Thank you for being a security champion this year. Your dedication to securing your code makes the entire developer community safer. We\'re excited about the momentum we\'re building together in 2025 and want to help you scale your security program in 2026. Claim your exclusive offer below to unlock additional Snyk license targets.',
        ceoImageUrl: 'https://snyk.io/_next/image/?url=https%3A%2F%2Fres.cloudinary.com%2Fsnyk%2Fimage%2Fupload%2Fv1630430074%2Fwordpress-sync%2Fpeter-mckay-1.jpg&w=256&q=75',
        ceoSignatureUrl: 'https://placehold.co/400',
        offerCtaUrl: 'https://snyk.io',
        linkedInShareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=https://snyk.io',
        xShareUrl: 'https://twitter.com/intent/tweet?url=https://snyk.io',
      })
    );

    // Write to output file
    const outputPath = path.join(__dirname, '../output.html');
    fs.writeFileSync(outputPath, html, 'utf-8');
    
    console.log('✅ HTML exported successfully to:', outputPath);
    console.log('📧 You can now copy the contents of output.html into your email marketing platform');
  } catch (error: any) {
    console.error('❌ Error exporting HTML:', error.message);
    console.error(error);
    process.exit(1);
  }
}

exportHTML();

