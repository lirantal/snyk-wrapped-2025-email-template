import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components';
  
  interface SnykYearInReviewEmailProps {
    year?: number;
    vulnerabilitiesFixed?: number;
    projectsScanned?: number;
    totalScans?: number;
    topProjectName?: string;
    topProjectVulnerabilities?: number;
    mostActiveMonth?: string;
    mostActiveMonthScans?: number;
    securityPercentile?: number;
    scanLocations?: string[];
    ceoName?: string;
    ceoTitle?: string;
    ceoMessage?: string;
    ceoImageUrl?: string;
    ceoSignatureUrl?: string;
    offerCtaText?: string;
    offerCtaUrl?: string;
    linkedInShareUrl?: string;
    xShareUrl?: string;
  }
  
  export default function SnykYearInReviewEmail({
    year,
    vulnerabilitiesFixed,
    projectsScanned,
    totalScans,
    topProjectName,
    topProjectVulnerabilities,
    mostActiveMonth,
    mostActiveMonthScans,
    securityPercentile,
    scanLocations = [],
    ceoName = 'Peter McKay',
    ceoTitle = 'CEO',
    ceoMessage = 'Thank you for being a security champion this year. Your dedication to securing your code makes the entire developer community safer.',
    ceoImageUrl = 'https://placehold.co/400',
    ceoSignatureUrl = 'https://placehold.co/400',
    offerCtaText = 'CLAIM YOUR OFFER',
    offerCtaUrl = 'https://snyk.io',
    linkedInShareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=https://snyk.io',
    xShareUrl = 'https://twitter.com/intent/tweet?url=https://snyk.io',
  }: SnykYearInReviewEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>{`Your ${String(year || 2025)} Snyk Wrapped - See your security stats`}</Preview>
        <Tailwind>
          <Body className="font-sans" style={{ backgroundColor: '#0C072A', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <Container className="mx-auto w-full max-w-[600px] p-0" style={{ backgroundColor: '#0C072A' }}>
              {/* Header Banner */}
              <Section className="p-8 text-center" style={{ backgroundColor: '#0C072A', padding: '48px 32px 32px' }}>
                <Text className="mx-0 mb-2 p-0 text-center font-normal text-lg text-white lowercase" style={{ fontSize: '18px', textTransform: 'lowercase' }}>
                  snyk
                </Text>
                <Text className="mx-0 mb-0 p-0 text-center font-black text-5xl uppercase tracking-widest" style={{ 
                  fontSize: '48px', 
                  fontWeight: '900',
                  color: 'transparent',
                  textShadow: '-2px -2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, 2px 2px 0 #FFFFFF, 0 -2px 0 #FFFFFF, 0 2px 0 #FFFFFF, -2px 0 0 #FFFFFF, 2px 0 0 #FFFFFF',
                }}>
                  {year} WRAPPED
                </Text>
              </Section>
  
              {/* Main Stat Card - Security Marathon (Blue Gradient) */}
              <Section 
                className="my-6 rounded-3xl p-8 text-center" 
                style={{ 
                  background: 'linear-gradient(135deg, #004F9A 0%, #00A5FF 100%)',
                  margin: '24px 16px',
                  padding: '48px 32px',
                  borderRadius: '24px',
                }}
              >
                <Heading className="m-0 font-bold text-sm text-white uppercase tracking-wider mb-4" style={{ fontSize: '12px', letterSpacing: '2px' }}>
                  YOUR SECURITY MARATHON
                </Heading>
                <Text className="my-4 font-black text-8xl text-white leading-none" style={{ fontSize: '96px', lineHeight: '1', fontWeight: '900' }}>
                  {totalScans}
                </Text>
                <Text className="mb-4 font-bold text-2xl text-white">
                  total tests and scans!
                </Text>
                <Text className="text-white text-base leading-6 opacity-90">
                  That&apos;s a whole lotta peace of mind. Run the World (Securely)!
                </Text>
              </Section>

              {/* Vulnerabilities Fixed Card (Red Gradient) */}
              <Section 
                className="my-6 rounded-3xl p-8 text-center" 
                style={{ 
                  background: 'linear-gradient(135deg, #6B0040 0%, #A7003F 100%)',
                  margin: '24px 16px',
                  padding: '48px 32px',
                  borderRadius: '24px',
                }}
              >
                <Heading className="m-0 font-bold text-sm text-white uppercase tracking-wider mb-4" style={{ fontSize: '12px', letterSpacing: '2px' }}>
                  CLOSING TIME, YOU FIXED THE BUGS
                </Heading>
                <Text className="my-4 font-black text-8xl text-white leading-none" style={{ fontSize: '96px', lineHeight: '1', fontWeight: '900' }}>
                  {vulnerabilitiesFixed}
                </Text>
                <Text className="mb-4 font-bold text-2xl text-white">
                  vulnerabilities fixed!
                </Text>
                <Text className="text-white text-base leading-6 opacity-90">
                  That&apos;s {vulnerabilitiesFixed} fewer sleepless nights for your security team.
                </Text>
              </Section>
  
              {/* Elite Percentile Card (Purple Gradient) */}
              {(() => {
                const percentile = securityPercentile || 1;
                return (
                  <Section 
                    className="my-6 rounded-3xl p-8 text-center" 
                    style={{ 
                      background: 'linear-gradient(135deg, #45007B 0%, #80007B 100%)',
                      margin: '24px 16px',
                      padding: '48px 32px',
                      borderRadius: '24px',
                    }}
                  >
                    <Heading className="m-0 font-bold text-2xl text-white uppercase tracking-wider mb-4">
                      YOU&apos;RE IN THE ELITE {percentile}%
                    </Heading>
                    <Text className="text-white text-base leading-6 opacity-90">
                      Your fix velocity puts you ahead of {100 - percentile}% of Snyk users. <strong>Developer Security Superstar Status: Achieved!</strong>
                    </Text>
                  </Section>
                );
              })()}

              {/* Social Share Buttons */}
              <Section className="my-6 text-center" style={{ margin: '32px 16px' }}>
                <Row>
                  <Column className="w-1/2 pr-2">
                    <Link
                      href={linkedInShareUrl}
                      className="inline-block rounded-full text-center font-bold text-sm text-white no-underline"
                      style={{
                        background: 'linear-gradient(90deg, #0077B5 0%, #005885 100%)',
                        padding: '14px 24px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      Share on LinkedIn
                    </Link>
                  </Column>
                  <Column className="w-1/2 pl-2">
                    <Link
                      href={xShareUrl}
                      className="inline-block rounded-full text-center font-bold text-sm text-white no-underline"
                      style={{
                        background: 'linear-gradient(90deg, #1a1a1a 0%, #000000 100%)',
                        padding: '14px 24px',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        display: 'block',
                        width: '100%',
                      }}
                    >
                      Share on X
                    </Link>
                  </Column>
                </Row>
              </Section>
  
              {/* CEO Message Section */}
              <Section 
                className="my-6 rounded-3xl p-8" 
                style={{ 
                  backgroundColor: '#0A0F2B',
                  margin: '48px 16px',
                  padding: '48px 32px',
                  borderRadius: '24px',
                  position: 'relative',
                }}
              >
                {/* Decorative Border - Angular Lines */}
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  background: 'linear-gradient(90deg, #FF7EE8 0%, #5AD8FF 100%)',
                  borderRadius: '24px 24px 0 0',
                }} />
                
                <Row>
                  <Column className="w-full">
                    <Heading className="m-0 mb-6 font-bold text-2xl text-white uppercase tracking-wider text-center" style={{ fontSize: '20px', letterSpacing: '2px' }}>
                      AN OFFER JUST FOR YOU
                    </Heading>
                    
                    {/* CEO Message */}
                    <Text className="mb-6 text-white text-base leading-7 text-left" style={{ lineHeight: '1.75', textAlign: 'left' }}>
                      {ceoMessage}
                    </Text>
                    
                    {/* CEO Image, Signature, and Title */}
                    <Row className="mb-6">
                      <Column className="w-1/4" style={{ verticalAlign: 'top' }}>
                        {ceoImageUrl && (
                          <Img
                            src={ceoImageUrl}
                            alt={ceoName}
                            width="80"
                            height="80"
                            style={{
                              borderRadius: '50%',
                              display: 'block',
                            }}
                          />
                        )}
                      </Column>
                      <Column className="w-3/4" style={{ verticalAlign: 'top', paddingLeft: '16px' }}>
                        {ceoSignatureUrl && (
                          <Img
                            src={ceoSignatureUrl}
                            alt={`${ceoName} signature`}
                            width="150"
                            height="45"
                            style={{
                              display: 'block',
                              marginBottom: '8px',
                            }}
                          />
                        )}
                        <Text className="m-0 font-bold text-white text-base">
                          {ceoName}, {ceoTitle}
                        </Text>
                      </Column>
                    </Row>
                    
                    {/* CTA Button with Pink-to-Purple Gradient */}
                    <Row>
                      <Column className="text-center">
                        <Link
                          href={offerCtaUrl}
                          className="inline-block rounded-lg text-center font-bold text-sm text-white no-underline"
                          style={{
                            background: 'linear-gradient(90deg, #FF7EE8 0%, #9B007B 100%)',
                            padding: '16px 48px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '14px',
                            letterSpacing: '1px',
                          }}
                        >
                          {offerCtaText}
                        </Link>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Section>
              
              {/* Footer */}
              <Section className="pb-8 text-center" style={{ paddingBottom: '32px' }}>
                <Text className="text-white text-sm opacity-60">
                  Thank you for being a security champion in {year}
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  
  SnykYearInReviewEmail.PreviewProps = {
    year: 2025,
    vulnerabilitiesFixed: 310,
    projectsScanned: 42,
    totalScans: 857,
    topProjectName: 'Main Application',
    topProjectVulnerabilities: 45,
    mostActiveMonth: 'September',
    mostActiveMonthScans: 28,
    securityPercentile: 1,
    scanLocations: ['United States', 'United Kingdom', 'Germany', 'Japan'],
    ceoName: 'Peter McKay',
    ceoTitle: 'CEO',
    ceoMessage: 'Thank you for being a security champion this year. Your dedication to securing your code makes the entire developer community safer. We\'re excited about the momentum we\'re building together in 2025 and want to help you scale your security program in 2026. Claim your exclusive offer below to unlock additional Snyk license targets.',
    ceoImageUrl: 'https://placehold.co/400',
    ceoSignatureUrl: 'https://placehold.co/400',
    offerCtaText: 'CLAIM YOUR OFFER',
    offerCtaUrl: 'https://snyk.io',
    linkedInShareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url=https://snyk.io',
    xShareUrl: 'https://twitter.com/intent/tweet?url=https://snyk.io',
  } satisfies SnykYearInReviewEmailProps;
