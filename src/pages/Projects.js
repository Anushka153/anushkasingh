import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      tag: 'AI • Health Tech',
      title: 'AI-Powered Nutrition Platform',
      meta: 'Digbi Health • Product Manager Intern • 2025',
      image: '/assets/images/digbi-project.jpg', // You'll need to add actual images
      context: 'Digital health startup needed to scale personalized nutrition advice without ballooning operational costs. Nutritionists were manually responding to every user query, creating a 2-day response time and limiting the number of users the platform could serve. The challenge was maintaining quality of advice while dramatically increasing speed and capacity.',
      role: 'Product strategy, roadmap ownership, cross-functional leadership, AI feature development from concept to launch',
      whatIDid: [
        'Defined product strategy for core mobile app functionality, identifying key friction points through user analytics and interviews',
        'Led development of 3 AI-powered features that integrated genetic, gut, and lifestyle data to provide instant nutrition recommendations',
        'Partnered with engineering team on prompt engineering and model optimization to ensure accuracy and scalability',
        'Drove simplified user flows that improved access to health insights while maintaining personalization',
        'Managed beta launch with 2,000+ users and onboarded 3 B2B clients'
      ],
      impact: [
        { value: '30s', label: 'response time (from 2 days)' },
        { value: '27%', label: 'engagement boost' },
        { value: '45%', label: 'projected margin lift' },
        { value: '$8M', label: 'projected ARR from B2B' }
      ]
    },
    {
      tag: 'Healthcare • Platform',
      title: 'Consolidated Healthcare Platform',
      meta: 'TruDoc HealthCare • Software Development Engineer • 2023-2024',
      context: 'Telemedicine platform serving 2M users across the Middle East had fragmented services across multiple apps, creating poor user experience and high operational overhead. Patients and providers struggled to navigate between different systems for appointments, consultations, and medical records. The business was bleeding money on infrastructure costs and support tickets.',
      role: 'Led cross-functional team of engineers and designers through architectural redesign and migration',
      whatIDid: [
        'Architected consolidation strategy for multiple services into a single healthcare app through cross-functional collaboration',
        'Led migration from legacy system to modern JavaScript framework via agile sprints',
        'Integrated video consultation feature directly into the unified platform',
        'Balanced technical execution with user experience considerations throughout the redesign',
        'Coordinated between product, engineering, design, and operations teams to ensure smooth transition'
      ],
      impact: [
        { value: '$1.6M', label: 'annual cost savings' },
        { value: '60%', label: 'performance boost' },
        { value: '26%', label: 'adoption increase' }
      ]
    },
    {
      tag: 'B2B SaaS • Fintech',
      title: 'B2B Engagement & Communication Platform',
      meta: 'Lummo (Donut.cx & Bukukas) • Associate TPM & Software Engineer • 2020-2023',
      context: 'B2B SaaS platform helping 6M+ SME businesses optimize operations lacked direct communication channels with their customers. Businesses needed real-time engagement tools and better visibility into customer behavior to reduce churn and improve service delivery. High support ticket volume indicated poor product self-service.',
      role: 'Product discovery, roadmap optimization, platform infrastructure development, iOS launch',
      whatIDid: [
        'Conducted product discovery using funnel conversion data to identify high-impact feature opportunities',
        'Released two key features that directly addressed user pain points discovered through data analysis',
        'Built real-time chat, message broadcasting, and analytics infrastructure enabling 200 customers per day per business',
        'Implemented in-app feedback system to close the loop with users and reduce support burden',
        'Led payments service development and launch, enhancing finance management platform',
        'Developed and launched iOS version to extend platform accessibility beyond Android'
      ],
      impact: [
        { value: '21%', label: 'engagement lift' },
        { value: '19%', label: 'fewer support tickets' },
        { value: '14%', label: 'traffic acceleration' },
        { value: '30%', label: 'more users via iOS' }
      ]
    },
    {
      tag: 'E-commerce • MBA Project',
      title: 'Shopbop "Bop & Browse" — Personalized Outfit Matching',
      meta: 'Amazon Product Management Practicum • 2024-2025',
      image: '/assets/images/shopbop-project.png',
      context: 'Leading a cross-functional team to design and prototype a personalized outfit-matching experience for Shopbop customers. The challenge is balancing AI-driven personalization with the joy of discovery and browsing that fashion shoppers expect. As quoted in Wisconsin School of Business: "We\'re exploring ways to enhance the customer experience and strengthen digital retail operations."',
      role: 'Product strategy, user research, cross-functional team leadership, prototype design. Acting as Product Manager for a team of computer science students.',
      whatIDid: [
        'Led user research to understand customer needs, shopping behaviors, and pain points in outfit discovery',
        'Designed product concept balancing AI personalization with browsing freedom and serendipity',
        'Applied agile methodologies to rapid prototyping and iteration cycles',
        'Coordinated across design, engineering, and business stakeholders to align on vision and feasibility',
        'Developed product requirements and success metrics framework',
        'Managed cross-functional team replicating real-world product development environment'
      ]
    },
    {
      tag: 'Mobility • Platform',
      title: 'Vendor Onboarding & Management Tool',
      meta: 'Drivezy • Mobile Application Developer • 2019-2020',
      context: 'Vehicle-sharing platform with 2M+ users faced a major bottleneck in scaling supply. Vendor onboarding took 7 days on average, involving manual verification, documentation, and training. This slow process limited platform growth and frustrated potential partners.',
      role: 'Mobile development and platform optimization',
      whatIDid: [
        'Developed efficient vendor onboarding and management tool to streamline the process',
        'Revamped mobile app architecture and strategized component development practices',
        'Focused on improving platform usability for both vendors and end users'
      ],
      impact: [
        { value: '2 days', label: 'onboarding time (from 7 days)' },
        { value: '15%', label: 'revenue growth' }
      ]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-intro">
            I work best on ambiguous problems where strategy, data, and execution need to 
            come together. Here are projects that show how I think and build.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
