import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      number: '01',
      tag: 'AI • Health Tech',
      problem:
        "Nutritionists were manually answering every user query—a 2-day response loop that couldn't scale past a few hundred users.",
      meta: 'Digbi Health  •  PM Intern  •  Summer 2025',
      insight:
        "Personalization didn't require a human in the loop. It required a system that understood each user's biology as well as a nutritionist would—then delivered it instantly.",
      keyMoves: [
        'Led end-to-end development of 3 AI features integrating genetic, gut microbiome, and lifestyle data—concept through beta launch with 2,000+ users',
        "Built barcode scanning that delivers real-time, biologically-personalized health scores on packaged foods—a feature users hadn't asked for but immediately adopted",
        'Designed evaluation frameworks with hallucination checks, nutritionist validation loops, and edge-case audits before every production rollout',
        'Partnered with engineering on prompt architecture and token optimization—reduced latency while preserving the depth of personalization',
      ],
      impact: [
        { value: '30s', label: 'nutritionist response time (from 2 days)' },
        { value: '~45%', label: 'projected gross margin lift' },
        { value: '$8M', label: 'projected ARR from 3 B2B clients' },
      ],
    },
    {
      number: '02',
      tag: 'Healthcare • Platform',
      problem:
        '2M users across the Middle East navigated between multiple apps just to access appointments, consultations, and records—friction was killing both adoption and trust.',
      meta: 'TruDoc HealthCare  •  Software Development Engineer  •  2023–2024',
      insight:
        "The platform wasn't losing on features. It was losing on coherence. Consolidation was a product strategy decision before it was an engineering one.",
      keyMoves: [
        'Architected the consolidation of fragmented services into a single unified healthcare app—owned the cross-functional roadmap and alignment across product, engineering, and ops',
        'Drove migration from legacy system to modern JavaScript framework—60% performance boost with continuity of care for 2M active users',
        'Integrated video consultation directly into the unified platform, removing the last reason users had to leave the app',
        'Led agile sprints across engineers and designers through a high-stakes production migration with no downtime',
      ],
      impact: [
        { value: '$1.6M', label: 'annual operational cost savings' },
        { value: '60%', label: 'application performance boost' },
        { value: '26%', label: 'increase in adoption rates' },
      ],
    },
    {
      number: '03',
      tag: 'E-commerce • MBA Project',
      problem:
        'Shopbop customers discovered great individual pieces but rarely left with a complete outfit—the experience was built for items, not for how fashion shoppers actually think.',
      meta: 'Amazon Product Management Practicum (Shopbop)  •  2024–2025',
      insight:
        "The opportunity wasn't smarter search—it was contextual discovery. AI that reasons in outfits rather than SKUs, balancing personalization with the serendipity that makes browsing enjoyable.",
      keyMoves: [
        "Led user research to map how customers think about outfit discovery versus individual item browsing—surfaced a gap the existing experience couldn't address",
        'Designed a product concept that balances AI-driven personalization with browsing freedom, informed by both behavioral data and qualitative research',
        'Applied agile cycles for rapid prototyping with a cross-functional team of CS students and business stakeholders replicating a real PM environment',
        'Developed product requirements, success metrics, and an evaluation framework for measuring outfit relevance at scale',
      ],
    },
    {
      number: '04',
      tag: 'Mobility • Platform',
      problem:
        'Vehicle-sharing growth was supply-constrained. Onboarding a new vendor took 7 days—most dropped off before completing the process, strangling supply acquisition.',
      meta: 'Drivezy  •  Mobile Application Developer  •  2019–2020',
      insight:
        "The constraint wasn't vendor interest. It was process friction. Cutting onboarding time was a supply acquisition strategy, not just an ops improvement.",
      keyMoves: [
        'Rebuilt the vendor onboarding flow to streamline verification, documentation, and training—reducing TAT from 7 days to 2',
        'Revamped mobile app architecture and component strategy, directly contributing to 15% revenue growth',
        'Optimized the end-to-end vendor experience with a focus on reducing drop-off at each stage of the funnel',
      ],
      impact: [
        { value: '2 days', label: 'vendor onboarding time (from 7)' },
        { value: '15%', label: 'revenue growth' },
      ],
    },
  ];

  return (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-intro">
            Each of these started with a constraint or a gap—something that
            couldn't scale, a loop that was too slow, an experience that didn't
            match how people actually behaved. Here's how I framed the problem
            and what I decided to do about it.
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
