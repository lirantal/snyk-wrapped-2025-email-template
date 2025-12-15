import { render } from '@react-email/render';
import React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import YearlyWrapped from '../emails/YearlyWrapped';

async function exportHTML() {
  try {
    // Render the email with sample data
    const html = await render(
      React.createElement(YearlyWrapped, {
        userName: 'Developer',
        year: 2025,
        stats: {
          projectsScanned: 42,
          vulnerabilitiesFixed: 128,
          topLanguage: 'JavaScript',
          totalScans: 156,
        },
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

