# Snyk Wrapped 2025 Email Template

A React Email template for creating a "Yearly Wrapped" style email notification in the Spotify Wrapped style, showcasing security stats and achievements.

## Setup

This project uses React Email to build email templates that can be exported as HTML for use in email marketing platforms.

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

Simply run:
```bash
npm run export
```

This will create an `output.html` file in the project root that you can copy into your email marketing platform. The script uses `tsx` to run TypeScript directly, so no compilation step is needed.

## Customization

Edit the email template in `emails/YearlyWrapped.tsx` to customize:
- Colors and styling
- Stats and data displayed
- Layout and structure
- Content and messaging

The template accepts props for customization:
- `userName`: The recipient's name
- `year`: The year for the wrapped
- `stats`: An object containing various statistics to display

## Project Structure

```
├── emails/
│   └── YearlyWrapped.tsx    # Main email template
├── scripts/
│   └── export-html.js       # Script to export HTML
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

Once you're ready to customize the design, you can:
1. Modify the styles in `emails/YearlyWrapped.tsx`
2. Add more sections or stats
3. Update colors to match your brand
4. Add images or graphics
5. Test in the dev server
6. Export and use in your email platform

