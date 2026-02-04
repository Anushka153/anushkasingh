import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'AI Product Manager Intern',
      company: 'Digbi Health',
      period: 'May 2025 – August 2025',
      description: 'Digital health startup offering personalized nutrition through genetic, gut, and lifestyle data. Owned product strategy and roadmap for core mobile application functionality.',
      highlights: [
        'Boosted engagement by ~27% through simplified user flows and improved access to health insights',
        'Achieved adoption by 2,000+ beta users by driving cross-functional teams through development of 3 AI-powered features, from concept to launch',
        'Onboarded 3 B2B clients with projected ~$8M/year revenue',
        'Reduced nutritionist response time from 2 days to 30 seconds through AI-driven nutrition system',
        'Partnered with engineering using prompt engineering to scale models integrating genetic, gut, and nutrient data',
        'Projected ~45% gross margin lift by lowering per-user service costs'
      ]
    },
    {
      role: 'Software Development Engineer',
      company: 'TruDoc HealthCare',
      period: 'November 2023 – August 2024',
      description: 'Telemedicine platform offering patient management and healthcare solutions in the Middle East, serving 2M+ users.',
      highlights: [
        'Reduced operational costs by $1.6M/year by consolidating various services into a single healthcare app via cross-functional collaboration',
        'Delivered a 60% boost in application performance through migration and architectural redesign of legacy system to modern JavaScript framework',
        'Effectively led a team of engineers and designers via agile sprints',
        'Increased adoption rates by ~26% and enhanced patient-provider communications by integrating video consultation feature'
      ]
    },
    {
      role: 'Associate Technical Product Manager',
      company: 'Lummo (Donut.cx)',
      period: 'November 2022 – April 2023',
      description: 'B2B SaaS company optimizing business operations, engagement, and financial processes.',
      highlights: [
        'Enhanced user engagement by ~21% through proactive product discovery and release of two key features',
        'Leveraged insights from product funnel conversion data to effectively reduce churn rate',
        'Reduced customer support tickets by ~19% by implementing in-app feedback system and optimizing product roadmap'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Lummo (Bukukas & Donut.cx)',
      period: 'April 2020 – April 2023',
      description: 'Built platform infrastructure and features for B2B SaaS serving 6M+ SME users.',
      highlights: [
        'Built platform infrastructure enabling 200 customers per day per business by designing and integrating real-time chat, message broadcasting, and analytics features',
        'Accelerated customer traffic by 14% in two months by leading payments service development and launch',
        'Bridged platform gap by developing and launching iOS version, extending payment solutions to 30% more users'
      ]
    },
    {
      role: 'Mobile Application Developer',
      company: 'Drivezy',
      period: 'February 2019 – March 2020',
      description: 'Vehicle-sharing platform offering short-term car and bike rentals with 2M+ users.',
      highlights: [
        'Achieved 15% revenue growth by revamping mobile app and strategizing component development practices',
        'Minimized onboarding TAT from 7 days to 2 days by developing efficient vendor onboarding & management tool'
      ]
    },
    {
      role: 'Teaching & Leadership',
      company: 'University of Wisconsin–Madison',
      period: '2024 – Present',
      description: 'Teaching Assistant for Consumer Design Strategies. Support student teams, evaluate client-facing work, and coach structured thinking.',
      highlights: [
        'Development Chair, Graduate Business Association',
        'Co-President, Entrepreneurship Club',
        'Product Management Practicum with Amazon (Shopbop): Leading cross-functional team to design and prototype personalized outfit-matching experience'
      ]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-intro">
            My background spans software engineering, AI-driven product development, and 
            business strategy. I've worked in startups, healthcare, and B2B platforms, 
            often bridging technical and non-technical teams.
          </p>
        </div>

        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
