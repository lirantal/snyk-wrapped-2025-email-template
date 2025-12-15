import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
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
  }: SnykYearInReviewEmailProps) {
    return (
      <Html>
        <Head />
        <Preview>{`See your security stats from ${String(year || 2024)}`}</Preview>
        <Tailwind>
          <Body className="bg-white font-sans">
            <Container className="mx-auto w-full max-w-[600px] p-0">
              <Section className="p-8 text-center">
                <Text className="mx-0 mt-4 mb-8 p-0 text-center font-normal text-2xl">
                  <span className="font-bold tracking-tighter">Snyk</span>
                </Text>
                <Text className="font-normal text-sm uppercase tracking-wider">
                  {year} in review
                </Text>
                <Heading className="my-4 font-medium text-4xl leading-tight">
                  Your Year with Snyk
                </Heading>
                <Text className="mb-8 text-lg leading-8">
                  What a year it&apos;s been! Let&apos;s take a look at how
                  you&apos;ve secured your code and fixed vulnerabilities.
                </Text>
                <Link
                  href="https://snyk.io"
                  className="inline-flex items-center rounded-full bg-gray-900 px-12 py-4 text-center font-bold text-sm text-white no-underline"
                >
                  View your dashboard
                </Link>
              </Section>
  
              <Section className="my-6 rounded-2xl bg-[#fb7a00]/10 bg-[radial-gradient(circle_at_bottom_right,#fb7a00_0%,transparent_60%)] p-8 text-center">
                <Heading className="m-0 font-medium text-3xl text-[#a63b00]">
                  You fixed
                </Heading>
                <Text className="my-4 font-bold text-7xl text-gray-900 leading-none">
                  {vulnerabilitiesFixed}
                </Text>
                <Text className="mb-4 font-medium text-3xl text-gray-900">
                  vulnerabilities
                </Text>
                <Text className="text-gray-900 text-sm leading-5">
                  That&apos;s incredible! Your commitment to security is making
                  your codebase more secure.
                </Text>
  
                <Hr className="mt-6" style={{ borderColor: '#fb7a00' }} />
                <Heading className="pt-5 font-medium text-gray-900 text-xs uppercase tracking-wider">
                  Your activity
                </Heading>
                <Row className="mt-5">
                  <Column className="w-1/3 text-center">
                    <Text className="font-medium text-[#a63b00] text-sm">
                      You scanned
                    </Text>
                    <Text className="my-1 font-bold text-4xl text-gray-900">
                      {projectsScanned}
                    </Text>
                    <Text className="text-2xl text-gray-900">projects</Text>
                  </Column>
                  <Column className="w-1/3 text-center">
                    <Text className="font-medium text-[#a63b00] text-sm">
                      You ran
                    </Text>
                    <Text className="my-1 font-bold text-4xl text-gray-900">
                      {totalScans}
                    </Text>
                    <Text className="text-2xl text-gray-900">scans</Text>
                  </Column>
                  <Column className="w-1/3 text-center">
                    <Text className="font-medium text-[#a63b00] text-sm">
                      You fixed
                    </Text>
                    <Text className="my-1 font-bold text-4xl text-gray-900">
                      {vulnerabilitiesFixed}
                    </Text>
                    <Text className="text-2xl text-gray-900">issues</Text>
                  </Column>
                </Row>
              </Section>
  
              <Section className="my-6 rounded-2xl bg-[#4b5563]/10 bg-[radial-gradient(circle_at_bottom_right,#4b5563_0%,transparent_60%)] p-8 text-center">
                <Heading className="m-0 font-medium text-3xl text-gray-800">
                  Your top project
                </Heading>
                <Text className="my-4 font-bold text-2xl text-gray-900 leading-none">
                  &quot;{topProjectName}&quot;
                </Text>
                <Text className="mb-4 font-medium text-5xl text-gray-900">
                  {topProjectVulnerabilities} vulnerabilities fixed
                </Text>
                <Text className="text-gray-900 text-sm leading-5">
                  This project benefited the most from your security efforts!
                </Text>
              </Section>
  
              <Section className="my-6 rounded-2xl bg-[#e4c5a0]/10 bg-[radial-gradient(circle_at_bottom_right,#e4c5a0_0%,transparent_60%)] p-8 text-center">
                <Heading className="m-0 font-medium text-3xl text-[#9c7b4a]">
                  Your most active month
                </Heading>
                <Text className="my-4 font-bold text-5xl text-gray-900 leading-none">
                  {mostActiveMonth}
                </Text>
                <Text className="mb-4 font-medium text-3xl text-gray-900">
                  with {mostActiveMonthScans} scans
                </Text>
                <Text className="text-gray-900 text-sm leading-5">
                  {mostActiveMonth} was your busiest month. What security improvements
                  did you make that month?
                </Text>
  
                <Hr className="mt-6" style={{ borderColor: '#e4c5a0' }} />
                <Heading className="pt-5 font-medium text-gray-900 text-xs uppercase tracking-wider">
                  You&apos;re in the top
                </Heading>
                <Text className="my-4 font-bold text-7xl text-gray-900 leading-none">
                  {securityPercentile}%
                </Text>
                <Text className="mb-4 font-medium text-gray-900 text-xl">
                  of security champions on Snyk
                </Text>
                <Text className="text-gray-900 text-sm leading-5">
                  You&apos;re one of our most security-conscious users. Thank you for
                  prioritizing security with Snyk!
                </Text>
              </Section>
  
              <Section className="my-6 rounded-2xl bg-[#10b981]/10 bg-[radial-gradient(circle_at_bottom_right,#10b981_0%,transparent_60%)] p-8 text-center">
                <Heading className="m-0 font-medium text-3xl text-[#065f46]">
                  Your scans ran from
                </Heading>
                <Row className="mt-4">
                  <Column>
                    {scanLocations.map((location, index) => (
                      <Text
                        key={index}
                        className="rounded-full bg-[#10b981] px-3 py-1 font-medium text-sm text-white"
                        style={{
                          margin: '4px 4px',
                          display: 'inline-block',
                        }}
                      >
                        {location}
                      </Text>
                    ))}
                  </Column>
                </Row>
                <Text className="mt-4 text-[#065f46] text-sm leading-5">
                  Your security scans are protecting code from all over the world!
                </Text>
              </Section>
  
              <Section className="pb-6 text-center">
                <Text className="text-gray-900 text-xl leading-8">
                  We&apos;re excited to support your security journey next year! <br />
                  Happy Holidays from the Snyk team :)
                </Text>
                <Link
                  href="https://snyk.io"
                  className="mt-4 inline-flex items-center rounded-full bg-gray-900 px-12 py-4 text-center font-bold text-sm text-white no-underline"
                >
                  Continue securing your code
                </Link>
                <Link
                  href="https://app.snyk.io"
                  className="mt-4 block items-center text-center font-bold text-gray-900 text-sm no-underline"
                >
                  Go to your dashboard
                </Link>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }
  
  SnykYearInReviewEmail.PreviewProps = {
    year: 2024,
    vulnerabilitiesFixed: 128,
    projectsScanned: 42,
    totalScans: 156,
    topProjectName: 'Main Application',
    topProjectVulnerabilities: 45,
    mostActiveMonth: 'September',
    mostActiveMonthScans: 28,
    securityPercentile: 95,
    scanLocations: ['United States', 'United Kingdom', 'Germany', 'Japan'],
  } satisfies SnykYearInReviewEmailProps;
  