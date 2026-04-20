import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

export const projects = [
  {
    slug: 'digbi-health-ai',
    number: '01',
    tag: 'AI • Health Tech',
    title: 'Food Safety Agent',
    company: 'Digbi Health',
    role: 'PM Intern',
    duration: '2025',
    challenge:
      "Digbi had 8 nutritionists fielding 100–150 food safety queries a day from 50,000 users who were asking things like 'can I eat this?' and waiting 1–2 days for an answer. The company was expanding but couldn't keep hiring nutritionists—they needed a product solution, not a headcount solution. Meanwhile, AskDigbi, the conversational AI tool already on the platform, had a silent problem: 70% of users who opened it left without sending a single message. Nobody had flagged it. And the AI pipeline underneath had four compounding technical failures no one had fully instrumented.",
    process: [
      'Started with people, not architecture. Spent week 1 in sessions with nutritionists understanding how they reasoned through safety questions—not just gathering requirements. Co-built the knowledge base with them as authors so the clinical logic was theirs, not mine.',
      'Built a barcode scanner using a RAG pipeline that maps products to Digbi\'s ingredient taxonomy and delivers a personalized health score in 30 seconds—placed it inside the existing conversational AI tool to shift user behavior gradually, not force a new standalone habit.',
      'Self-initiated an investigation into AskDigbi\'s 70% drop-off. The data showed users were hitting a blank text box and bouncing—every question felt like the wrong one to ask. Partnered with CS who were hearing a second signal: food logs, health history, and metrics were scattered with no clear home. Connected two problems on separate roadmaps and solved them as one.',
      'Built a question-generation agent that reads each user\'s recent food logs and health history, surfacing 2 personalized questions before they had to think of one.',
      'When I monitored the AI pipeline with Langfuse I found four compounding problems: prompt not structured for consistent output, user data parsed incorrectly before reaching the model, RAG chunking pulling context from wrong time windows, agent unable to answer questions requiring broader history. Rewrote the prompt, fixed data parsing, reworked chunking strategy, and tested every change against accuracy, relevance, and latency before going to production.',
      'Ran nutritionist review of flagged answers as a safety net before moving to full autonomy. Ran a pre-launch validation session specifically to surface weak spots—not to demo strengths.',
      'Sustained engineering priority across all 3 features in an 8-week sprint while 6 other interns couldn\'t get build time—came to every engineering ask with full system architecture, APIs, edge cases, and sprint-ready task estimates.',
    ],
    solution:
      "Automating 85% of food safety queries meant Digbi could scale users without scaling headcount—eliminating the biggest driver of per-user service cost. The food agent and AskDigbi together became the centerpiece of the enterprise pitch. The evaluation documentation I built in Langfuse became a sales asset: enterprise buyers with AI governance requirements asked for performance documentation—we had it because everything was instrumented.",
    impact: [
      { value: '30s', label: 'response time (from 1–2 days)' },
      { value: '2×', label: 'questions/week: 5,000 → 10,000' },
      { value: '+27%', label: 'sessions across 5,000 active users' },
      { value: '45%', label: 'projected gross margin improvement' },
      { value: '$8M', label: 'new revenue from 5 enterprise clients' },
    ],
  },
  {
    slug: 'trudoc-migration',
    number: '02',
    tag: 'Healthcare • Engineering',
    title: 'EMR Legacy Migration',
    company: 'TruDoc HealthCare',
    role: 'Software Development Engineer',
    duration: '2023–2024',
    challenge:
      "TruDoc's platform held 3M medical records used by doctors in live patient consultations every day. The codebase was 10 years old, had no documentation, and the original developers were gone. One missed dependency in a live clinical system doesn't produce a bug report—it breaks something during a consultation before anyone knows it's broken. At the same time, 30% of all CS tickets were about clinical notes failing—notes not saving mid-consultation, blank records after appointments, missing medications, missing lab tests. That is not a UX problem. That is a patient safety problem.",
    process: [
      'With no documentation and no original developers, the only way through was function by function, page by page. Built the dependency map manually before touching any code.',
      'Ran separate stakeholder sessions by group—not joint ones. Clinical staff stop contributing when engineers are in the room. A care coordinator flagged a data visualisation dependency used in every consultation—not in documentation, not visible in the code. Only found it because they were the only non-technical people in the room.',
      'Migrated screen by screen with both systems running simultaneously, redirecting as each surface was completed. Started with RBAC first—the most foundational piece—and worked outward. Defined rollback criteria upfront so the answer to "should we roll back" was never a 2am judgment call.',
      'For clinical note auto-save: modern React state management was not available—this had to work within 2014-era Angular event handling patterns. Worked within the existing architecture for stability, not convenience. A background save mechanism compatible with the existing patterns took longer to design but was far more stable when it ran.',
      'While in the codebase, added clinical note autofills and insurance autofill from patient records—reducing time and clicks on the 4 highest-use pages. If you\'re already in a fragile codebase fixing one thing, you do the adjacent improvements while you\'re there.',
    ],
    solution:
      "Nothing broke a live consultation across 6 months. The clinical note failure category—30% of all CS tickets—essentially disappeared. But the result that mattered most was what the migration unlocked: the legacy stack was running on outdated, unsupported libraries. Every new feature request hit the same wall. The migration removed all of that. TruDoc could now hire engineers who wanted to work in the stack, add any modern library they needed, and build without a ceiling. We didn't just migrate a system—we removed the constraints that were blocking everything that came after.",
    impact: [
      { value: '1.8s', label: 'page load (from 5 seconds — 40% faster)' },
      { value: '~30%', label: 'CS ticket category eliminated (clinical note failures)' },
      { value: '0', label: 'live consultation disruptions across 6 months' },
    ],
  },
  {
    slug: 'bukukas-payments',
    number: '03',
    tag: 'Fintech • Payments',
    title: 'Payments — 6 Weeks to Ship',
    company: 'Bukukas (Lummo)',
    role: 'Frontend Engineer',
    duration: '2021',
    challenge:
      "It was 2021 at Bukukas—a bookkeeping startup in Indonesia with over a million customers. We had six weeks to ship payments before a hard shutdown date. If we didn't ship, we'd miss the Ramadan campaign window—our biggest commercial opportunity of the year—and hand it to a competitor who was already two weeks ahead of us. Every external blocker ran through Xendit, a third-party payments tool with 16–24 hour response times. And midway through, engineering and QA stalled on a dispute that could have taken days we didn't have.",
    process: [
      'Was the FE owner on a team of three, responsible for end-to-end delivery of the payment frontend—KYC onboarding, send/receive flows, payment history, and bank management. The direct connection point between backend, designer, PM, QA, and content writer.',
      'Before committing to any dates, sat with the PM to translate the product spec into FE journeys—timelines came from the actual work, not the calendar.',
      'When engineering and QA hit a dispute over bugs vs. features, escalating to leadership would have taken days. Spent half a day pre-triaging every disputed item by user impact and whether it would block a real transaction. Brought that analysis to the QA lead and PM—conceded everything where QA was defensible, held firm on one item the PRD was unambiguous on: whether payments auto-synced to bookkeeping history or required user opt-in.',
      'Sign-off done in one session. The QA lead became someone I called before a release rather than negotiated with during one—that changed how every subsequent release went.',
    ],
    solution:
      "Shipped the first week of January—before the competitor. Payment adoption became the primary growth metric in the weeks after launch. The Ramadan campaign, two months later, was built entirely on that infrastructure being live. The lesson wasn't about speed—it was that pre-triaging conflict by stakes, not by opinion, is how you get sign-off in one session instead of three.",
    impact: [
      { value: 'Pre-competitor', label: 'shipped before the competing product launched' },
      { value: '+12%', label: 'revenue expansion post-launch' },
      { value: '1 session', label: 'to resolve a QA dispute that could have taken days' },
    ],
  },
  {
    slug: 'lummo-design-system',
    number: '04',
    tag: 'Design Systems • Frontend',
    title: 'Design System',
    company: 'Lummo (Donut.cx)',
    role: 'Frontend Engineer',
    duration: '2022–2023',
    challenge:
      "Lummo was pivoting from Bukukas to Donut.cx. Three frontend engineering pods were converging on one codebase for the first time—each with different conventions, different component patterns, different definitions of correct code. A designer working across all three had no shared library—design decisions were being re-interpreted differently in every pod, every sprint. I suggested building a design system before the pivot began. Senior developers pushed back hard—it would kill the timeline. My manager was onboard but I needed the senior devs to actually cooperate on the ground. Change their minds without the authority to mandate anything, against people with more seniority and more technical context than me.",
    process: [
      'Didn\'t go back with the same argument. Went back with a document—pros and cons of building before vs. after, industry standards showing what it cost other teams when they didn\'t, and a concrete POC proposal. POC framing was deliberate: not asking them to commit to a full design system—asking for a small, time-boxed yes.',
      'Built the design system alongside the pivot product in parallel—live catalogue of actual requirements. Components documented in real time from the product being built. By the time I presented to stakeholders it wasn\'t a proposal anymore—it was a demonstration built from their own product requirements.',
      'One senior dev didn\'t adopt it for the first 2–3 sprints. Kept writing his own CSS—long, repetitive, inconsistent standards, the exact problem the library was built to solve. Set up a 1:1 using the PR data as the entry point. Reframed the argument entirely—not \'use my system\' but \'by adopting this library you can drop Tailwind, eliminate repetitive CSS, and stop maintaining old components. This saves you time.\' He adopted it fully before launch.',
      'Led a pod of 3 engineers through the full build—stakeholder meetings, cross-pod convention conflicts, live feature requests from the pivot.',
    ],
    solution:
      "Three pods shipped one consistent product. The designer handed off once to a shared library instead of three times to three interpretations. Production-ready 2 weeks ahead of a 6-month schedule—that time went back to testing. The harder result: the senior dev who resisted longest became an advocate. The system wasn't imposed—it was adopted because it made their work easier.",
    impact: [
      { value: '70+', label: 'components shipped (20+ core, 70+ with all variants and states)' },
      { value: '~50%', label: 'reduction in design-to-dev handoff time' },
      { value: '2 weeks', label: 'production-ready ahead of a 6-month schedule' },
    ],
  },
  {
    slug: 'donut-analytics',
    number: '05',
    tag: 'B2B SaaS • Product & Engineering',
    title: 'Analytics — 2 Weeks, Not 7',
    company: 'Donut.cx (Lummo)',
    role: 'Frontend Engineer + PM',
    duration: '2022–2023',
    challenge:
      "Lummo had just pivoted from Bukukas to Donut.cx—a B2B customer engagement SaaS. Clients could not see what was working on their platform. Without analytics, they couldn't make decisions. Without decisions, they couldn't justify staying. A few clients needed analytics just to onboard. I asked my engineering manager for a PM capacity role on Donut.cx—no PM title, no roadmap, no OKRs. He agreed. The honest estimate to build analytics properly was 6–7 weeks. The competitive window was 2. The competitor was close, and the client needed to see analytics working before they would commit.",
    process: [
      'Started by finding what was broken rather than inheriting what existed. The clearest gap was analytics visibility—clients could not see what was working on their platform.',
      'Made the call: integrate Looker Studio via iframe instead of building the analytics layer from scratch. Two weeks, not seven. The tradeoff was real—the embedded Looker interface would not match the design system. Named it upfront and presented the tradeoff to stakeholders: 7 weeks done right, or 2 weeks with a UI inconsistency we would resolve in the next sprint.',
      'Leadership pushed back—they wanted to think it through. Instead of arguing, built a rough working version and showed them. They could see it working. They aligned. The UI inconsistency was visible and acceptable. Speed was the right call.',
      'Put real effort into making the embedded interface feel as native as possible—matching Donut.cx colors and styling as closely as the iframe constraint allowed. Wrote the specs, developed alongside the engineers, and owned QA.',
    ],
    solution:
      "We onboarded before the competitor. The client we would have lost while building it properly is still a client. A shipped imperfect solution that keeps a client beats a perfect solution that arrives after they have signed somewhere else. The UI inconsistency was resolved in the next sprint, as promised.",
    impact: [
      { value: '10', label: 'new clients onboarded in 2 months after launch' },
      { value: '+20%', label: 'client base growth (50 → 60 clients)' },
      { value: '+21%', label: 'active user growth in the first 30 days' },
    ],
  },
  {
    slug: 'shopbop-ai',
    number: '06',
    tag: 'E-commerce • MBA Project',
    title: 'AI Outfit Discovery',
    company: 'Amazon / Shopbop',
    role: 'Product Management Practicum',
    duration: '2024–2025',
    challenge:
      "Shopbop customers discovered great individual pieces but rarely left with a complete outfit. The experience was built for items—search, filter, add to cart—not for how fashion shoppers actually think. Shoppers think in outfits: 'what goes with this?', 'what would I wear this to?'. The gap wasn't missing features. It was a fundamental mismatch between the browsing model and the mental model.",
    process: [
      'Led user research to map how customers think about outfit discovery versus individual item browsing—surfaced that the existing search and recommendation experience couldn\'t bridge the gap between finding a piece and building a look.',
      'Designed a product concept that introduces contextual AI-driven outfit suggestions—reasoning at the outfit level, not the SKU level—while preserving the browsing freedom that makes fashion discovery enjoyable rather than prescriptive.',
      'Applied agile cycles for rapid prototyping with a cross-functional team of CS students and business stakeholders, replicating a real PM environment with technical and business constraints.',
      'Developed full product requirements, success metrics, and an evaluation framework for measuring outfit relevance at scale—including how to assess when AI suggestions help vs. when they constrain discovery.',
    ],
    solution:
      "The core insight was that the opportunity wasn't smarter search—it was contextual discovery. AI that reasons in outfits rather than SKUs, balancing personalization with the serendipity that makes browsing enjoyable. The evaluation framework specifically addressed the hardest product question: how do you measure whether an AI recommendation felt right without being too narrow?",
    impact: [],
  },
  {
    slug: 'drivezy',
    number: '07',
    tag: 'Mobility • Platform',
    title: 'Vendor Onboarding — 7 Days to 2',
    company: 'Drivezy',
    role: 'Mobile Application Developer',
    duration: '2019–2020',
    challenge:
      "Vehicle-sharing growth was supply-constrained. To grow the fleet, Drivezy needed more vendors—but onboarding a new vendor took 7 days. Most dropped off before completing the process. The acquisition funnel was leaking at the entry point, and the company couldn't grow supply fast enough to meet demand.",
    process: [
      'Rebuilt the vendor onboarding flow to streamline verification, documentation, and training steps—mapping each stage of the funnel to identify where drop-off was highest and redesigning those touchpoints first.',
      'Revamped the mobile app architecture and component strategy to improve reliability and performance across the onboarding experience.',
      'Optimized the end-to-end vendor experience with a focus on reducing friction at each decision point—making it easier to say yes at every step.',
    ],
    solution:
      "The constraint wasn't vendor interest—it was process friction. Cutting onboarding time from 7 days to 2 was a supply acquisition strategy, not just an ops improvement. A faster onboarding directly translated to more vendors in the fleet, which translated directly to revenue.",
    impact: [
      { value: '2 days', label: 'vendor onboarding time (from 7)' },
      { value: '15%', label: 'revenue growth' },
    ],
  },
];

function Projects() {
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

        <div className="projects-list">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="project-list-item"
            >
              <div className="pli-left">
                <span className="pli-number">{project.number}</span>
                <div className="pli-text">
                  <h3 className="pli-title">{project.title}</h3>
                  <p className="pli-meta">{project.company} &nbsp;·&nbsp; {project.role}</p>
                </div>
              </div>
              <div className="pli-right">
                <span className="pli-tag">{project.tag}</span>
                <span className="pli-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
