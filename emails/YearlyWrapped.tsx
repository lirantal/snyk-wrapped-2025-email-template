import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Button,
  Img,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface YearlyWrappedProps {
  userName?: string;
  year?: number;
  stats?: {
    projectsScanned?: number;
    vulnerabilitiesFixed?: number;
    topLanguage?: string;
    totalScans?: number;
  };
}

export default function YearlyWrapped({
  userName = 'Developer',
  year = 2025,
  stats = {
    projectsScanned: 42,
    vulnerabilitiesFixed: 128,
    topLanguage: 'JavaScript',
    totalScans: 156,
  },
}: YearlyWrappedProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={title}>Your {year} Snyk Wrapped</Heading>
            <Text style={greeting}>Hey {userName}! 👋</Text>
            <Text style={intro}>
              Here's a look back at your security journey this year.
            </Text>
          </Section>

          <Section style={statsSection}>
            <Section style={statCard}>
              <Text style={statNumber}>{stats.projectsScanned}</Text>
              <Text style={statLabel}>Projects Scanned</Text>
            </Section>

            <Section style={statCard}>
              <Text style={statNumber}>{stats.vulnerabilitiesFixed}</Text>
              <Text style={statLabel}>Vulnerabilities Fixed</Text>
            </Section>

            <Section style={statCard}>
              <Text style={statNumber}>{stats.totalScans}</Text>
              <Text style={statLabel}>Total Scans</Text>
            </Section>
          </Section>

          <Section style={highlightSection}>
            <Text style={highlightLabel}>Your Top Language</Text>
            <Text style={highlightValue}>{stats.topLanguage}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerText}>
              Thank you for making security a priority in {year}!
            </Text>
            <Button style={button} href="https://snyk.io">
              Continue Your Security Journey
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#1a1a1a',
  borderRadius: '8px 8px 0 0',
};

const title = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  lineHeight: '1.2',
};

const greeting = {
  color: '#ffffff',
  fontSize: '18px',
  margin: '0 0 8px',
};

const intro = {
  color: '#a0a0a0',
  fontSize: '16px',
  margin: '0',
  lineHeight: '1.5',
};

const statsSection = {
  padding: '32px 24px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap' as const,
  gap: '16px',
};

const statCard = {
  textAlign: 'center' as const,
  flex: '1',
  minWidth: '120px',
};

const statNumber = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#1a1a1a',
  margin: '0 0 8px',
  lineHeight: '1',
};

const statLabel = {
  fontSize: '14px',
  color: '#666666',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const highlightSection = {
  padding: '32px 24px',
  textAlign: 'center' as const,
  backgroundColor: '#f8f9fa',
  margin: '0 24px',
  borderRadius: '8px',
};

const highlightLabel = {
  fontSize: '14px',
  color: '#666666',
  margin: '0 0 8px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const highlightValue = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#1a1a1a',
  margin: '0',
};

const divider = {
  borderColor: '#e6ebf1',
  margin: '32px 24px',
};

const footer = {
  padding: '0 24px',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '16px',
  color: '#666666',
  margin: '0 0 24px',
  lineHeight: '1.5',
};

const button = {
  backgroundColor: '#1a1a1a',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

