# Snyk Wrapped 2025 Email Template

A React Email template for creating a "Yearly Wrapped" style email notification in the Spotify Wrapped style, showcasing security stats and achievements.

## Setup

This project uses React Email to build email templates that can be exported as HTML for use in email marketing platforms or sent directly via Mailgun.

## Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## Development

Start the React Email development server to preview your email template:

```bash
npm run dev
```

This will start a local server (usually at `http://localhost:3000`) where you can preview and test your email template.

## Building

Compile TypeScript:

```bash
npm run build
```

## Exporting HTML

To generate the HTML file for your email marketing platform:

```bash
npm run export
```

This will create an `output.html` file in the project root that you can copy into your email marketing platform. The script uses `tsx` to run TypeScript directly, so no compilation step is needed.

## Sending Emails

To send emails via Mailgun using the recipients CSV file:

```bash
npm run send-emails
```

This script reads from `recipients.csv` (or a custom path specified via `CSV_PATH` environment variable) and sends personalized emails to each recipient.

## Recipients CSV File

The `recipients.csv` file contains recipient data for personalized email sending. Each row represents one recipient with their personalized statistics.

### CSV Format

The CSV file should have the following columns:

| Column Name | Required | Type | Description | Example |
|------------|----------|------|-------------|---------|
| `email` | ✅ Yes | string | Recipient's email address | `liran@snyk.io` |
| `name` | ❌ No | string | Recipient's name (for personalization). If empty, personalization is skipped | `Liran` |
| `year` | ❌ No | number | The year for the wrapped statistics | `2025` |
| `vulnerabilitiesFixed` | ❌ No | number | Total number of vulnerabilities fixed | `310` |
| `monitoredTests` | ❌ No | number | Total number of monitored tests performed | `857` |
| `securityPercentile` | ❌ No | number | Security percentile ranking (1-100) | `1` |

### Example CSV

```csv
email,name,year,vulnerabilitiesFixed,monitoredTests,securityPercentile
liran@snyk.io,Liran,2025,310,857,1
user@example.com,John,2025,128,450,5
```

### Notes

- The `email` field is required and must be a valid email address
- The `name` field is optional. If empty or missing, the email will not include personalized greetings
- All numeric fields should be integers
- If optional fields are missing, the email template will use default values or omit those sections
- The CSV file should include a header row with column names

## Configurable Data

The email template and sending script support various configuration options through environment variables and template props.

### Environment Variables

#### Required for Email Sending

These environment variables are required when using the `send-emails` script:

| Variable | Description | Example |
|----------|-------------|---------|
| `MAILGUN_API_KEY` | Your Mailgun API key | `key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` |
| `MAILGUN_DOMAIN` | Your Mailgun domain | `mg.example.com` |
| `MAILGUN_FROM_EMAIL` | Sender email address | `noreply@snyk.io` |
| `MAILGUN_FROM_NAME` | Sender display name | `Snyk Team` |

#### Optional Configuration

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `EMAIL_SUBJECT` | Custom email subject line | `Your {year} Snyk Wrapped - See your security stats` | `Your 2025 Security Wrapped` |
| `CSV_PATH` | Path to recipients CSV file | `./recipients.csv` | `./data/recipients.csv` |
| `LINKEDIN_SHARE_URL` | LinkedIn share URL for social sharing | Not included | `https://www.linkedin.com/sharing/share-offsite/?url=https://snyk.io` |
| `X_SHARE_URL` | X (Twitter) share URL for social sharing | Not included | `https://twitter.com/intent/tweet?url=https://snyk.io` |
| `UNSUBSCRIBE_URL` | Unsubscribe link URL | Not included | `https://snyk.io/unsubscribe?email={email}` |

### Template Configuration

The email template (`V3YearlyWrapped.tsx`) supports the following props that can be configured:

#### Data Props (from CSV)

- `year` - The year for the wrapped
- `vulnerabilitiesFixed` - Number of vulnerabilities fixed
- `monitoredTests` - Total number of monitored tests
- `securityPercentile` - Security percentile (1-100)
- `recipientName` - Recipient's name for personalization
- `unsubscribeUrl` - Unsubscribe link URL
- `linkedInShareUrl` - LinkedIn share URL
- `xShareUrl` - X (Twitter) share URL

#### CEO Message Props (Hardcoded Defaults)

These can be modified directly in the template component:

- `ceoName` - CEO name (default: `Peter McKay`)
- `ceoTitle` - CEO title (default: `CEO`)
- `ceoImageUrl` - CEO profile image URL
- `ceoSignatureUrl` - CEO signature image URL (currently commented out)
- `offerCtaUrl` - CTA button URL for the offer (default: `https://snyk.io`)

To customize these values, edit the default props in `emails/V3YearlyWrapped.tsx`.

## Customization

Edit the email templates in the `emails/` directory to customize:
- Colors and styling
- Stats and data displayed
- Layout and structure
- Content and messaging
- CEO message and offer details

### Available Templates

- `V1YearlyWrapped.tsx` - Original template version
- `V2YearlyWrapped.tsx` - Second version with enhanced styling
- `V3YearlyWrapped.tsx` - Current version with CEO message and social sharing (used by send-emails script)

## Project Structure

```
├── emails/
│   ├── V1YearlyWrapped.tsx    # Original email template
│   ├── V2YearlyWrapped.tsx    # Enhanced template version
│   └── V3YearlyWrapped.tsx    # Current template with CEO message
├── scripts/
│   ├── export-html.ts         # Script to export HTML
│   └── send-emails.ts         # Script to send emails via Mailgun
├── recipients.csv             # Recipients data file
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

Once you're ready to customize the design, you can:
1. Modify the styles in `emails/V3YearlyWrapped.tsx`
2. Add more sections or stats
3. Update colors to match your brand
4. Add images or graphics
5. Customize CEO message and offer details
6. Test in the dev server
7. Export and use in your email platform or send via Mailgun

