export interface ProjectMeta {
  slug: string;
  title: string;
  subtitle: string;
  /** Optional hero tagline under the title (work page hero). Falls back to `subtitle`. */
  heroSubtitle?: string;
  label: string;
  heroImage: string;
  heroVideo?: string;
  role: string[];
  team: string;
  timeline: string;
  tools: string[];
  /** Shown in hero metadata instead of Tools when set (e.g. “In-person”). */
  platform?: string;
  overview: string;
  color?: string;
  sections?: ProjectSection[];
  links?: { label: string; href: string }[];
}

export interface ProjectSection {
  type: "text" | "image" | "color-palette" | "metrics" | "images-grid";
  heading?: string;
  body?: string;
  bodyHtml?: string;
  image?: string;
  images?: string[];
  colors?: { hex: string; label?: string }[];
  metrics?: { value: string; label: string }[];
}

export const projects: ProjectMeta[] = [
  {
    slug: "social-robots",
    title: "Social Robots – AI Against Loneliness",
    subtitle: "Designed for Accessibility Friendly AI Companions for Everyone",
    label: "Project 2025",
    heroImage: "https://www.figma.com/api/mcp/asset/e19b9f2a-b266-4f23-9e54-e8a3fd85e6f1",
    heroVideo: "/media/social-robots-hero.mp4",
    role: ["Product Designer", "User Experience Design", "User Interface Design"],
    team: "m-Health & e-Health Development and Innovation Centre (MEDIC)",
    timeline: "16 weeks (Start Nov 2023)",
    tools: ["Figma", "Illustrator", "Sketch", "Codex"],
    overview:
      "One of my favorite projects was working on TEMI, an autonomous AI assistant robot designed to follow users, navigate spaces independently, and help people connect with family, friends, and online services.",
    sections: [
      {
        type: "text",
        heading: "Experience & Impact",
        bodyHtml:
          "One of my favorite projects was working on <strong>TEMI</strong>, <strong>an autonomous AI assistant robot</strong> designed to <strong>follow users</strong>, <strong>navigate spaces independently</strong>, and help people connect with family, friends, and online services.<br/><br/>At <a href='https://www.sjlc.ca/' target='_blank' rel='noopener noreferrer'>St. Joseph's Lifecare Centre Brantford</a>, TEMI was piloted in a <strong>six-month HiREB-approved clinical study</strong> in 2023-2024 to help reduce <strong>feelings of loneliness</strong> among residents.<br/><br/>I worked closely with programmers from the <a href='https://ideaworks.mohawkcollege.ca/research-centre/m-health-e-health-development-and-innovation-centre-medic/' target='_blank' rel='noopener noreferrer'>MEDIC team</a> to design the <strong>UX and product flows</strong> for TEMI. This project really pushed me to think differently about design. Our main users were <strong>elderly residents</strong> and <strong>patients</strong>, so <strong>every interaction</strong> had to be <strong>simple, clear, and accessible</strong>. Through <strong>continuous testing</strong>, I learned how important <strong>accessibility features</strong> are, from <strong>readable interfaces</strong> to <strong>reducing cognitive load</strong> and <strong>making navigation intuitive</strong>.<br/><br/><strong>Putting myself in the users' position</strong> helped me better understand <strong>their emotional needs</strong>. Many residents simply wanted <strong>someone to talk to</strong>, especially in <strong>their own language</strong>. That insight led us to include <strong>AI-powered translation features</strong> to support <strong>multilingual communication</strong> and make conversations feel more <strong>natural and inclusive</strong>.<br/><br/><strong>This project deeply touched me</strong>. Seeing residents <strong>feel joyful</strong> and <strong>connected</strong> reminded me that <strong>design isn't just about functionality, it can truly impact someone's emotional well-being</strong>. It strengthened not only my UX and collaboration skills, but also my empathy as a designer.<br/><br/>Find out more about TEMI and the <a href='https://ideaworks.mohawkcollege.ca/research-centre/m-health-e-health-development-and-innovation-centre-medic/' target='_blank' rel='noopener noreferrer'><strong>MEDIC team</strong></a> here.",
      },
      {
        type: "image",
        heading: "Interconnected Magazine Feature",
        image: "https://www.figma.com/api/mcp/asset/e115d9f2-e037-432e-ae71-caa8da99c63b",
      },
    ],
    links: [
      {
        label: "Read the full article on pages 76–77 of Interconnected",
        href: "https://online.flippingbook.com/view/819332032/76/",
      },
    ],
  },
  {
    slug: "applied-research-101",
    title: "Applied Research 101",
    subtitle: "Designing Visuals for AR 101 Courses for Students, Faculty & High School",
    label: "Project 2024",
    heroImage: "/media/applied-research-101-hero-laptop.png",
    role: ["Human Interface Design", "Interaction Design"],
    team: "Centre for Emerging Research Initiatives (CERI)",
    timeline: "6 months",
    tools: ["Figma", "Illustrator", "Thinkific", "HTML/CSS"],
    overview:
      "I redesigned Applied Research 101 with visuals and interactive elements tailored to students, faculty, and high school learners. Using HTML, CSS, and H5P in Thinkific, I transformed the course into an engaging, easy-to-navigate learning experience that makes complex research concepts clear and approachable.",
    sections: [
      {
        type: "text",
        heading: "Experience & Impact",
        bodyHtml:
          "I redesigned <a href=\"https://ideaworks.thinkific.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Applied Research 101</a> with <strong>visuals</strong> and <strong>interactive elements</strong> tailored to <strong>students, faculty,</strong> and <strong>high school learners</strong>. Using <strong>HTML, CSS,</strong> and <strong>H5P in Thinkific</strong>, I transformed the course into an <strong>engaging, easy-to-navigate learning experience</strong> that makes <strong>complex research concepts clear</strong> and <strong>approachable</strong>. I worked closely with the <a href=\"https://ideaworks.mohawkcollege.ca/research-centre/centre-for-emerging-research-initiatives-ceri/\" target=\"_blank\" rel=\"noopener noreferrer\">CERI team</a> to understand <strong>applied research</strong> and how they wanted the <strong>course delivered</strong>, ensuring the <strong>design aligned with their goals</strong>.<br/><br/>I made sure the course met <strong>AODA accessibility standards</strong> so everyone could <strong>participate fully</strong>. The redesign made <strong>learning easier</strong> and <strong>more engaging</strong>, helping <strong>course completion rates jump by 20%</strong> and keeping learners <strong>more motivated</strong> throughout.<br/><br/><strong>Moving the course online made a real difference,</strong> it gave <strong>more people access</strong> to applied research, <strong>saved time</strong> and <strong>money</strong>, and created a <strong>flexible, scalable way</strong> for learners to get started with research confidently.<br/><br/>Here&rsquo;s a look at what I designed for <a href=\"https://ideaworks.thinkific.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#990033;font-weight:600;\">Applied Research 101</a>. Stay tuned for more!",
      },
    ],
    links: [
      {
        label: "View Applied Research 101 on Thinkific",
        href: "https://ideaworks.thinkific.com/",
      },
    ],
  },
  {
    slug: "cashpay",
    title: "CashPay – Track Your Finances",
    subtitle: "Designed and built the product from 0→1 on my own, handling both UI and UX.",
    label: "Case Study 2023",
    heroImage: "https://www.figma.com/api/mcp/asset/6a91d09c-b1cb-4900-96a4-1a8ff25b47c6",
    heroVideo: "/media/cashpay-mobile-screens-grid-remix-copy.mp4",
    role: ["Product Designer", "User Experience Design", "User Interface Design"],
    team: "Solo project",
    timeline: "Mar – Jun 2023",
    tools: ["Figma", "Miro", "Illustrator", "Google Forms"],
    overview:
      "CashPay is a personal finance tracking app designed from the ground up. I handled every aspect of product design — from initial user research and defining the problem space through to high-fidelity mockups and a clickable prototype.",
    sections: [
      {
        type: "image",
        heading: "Problem Statement",
        image: "https://www.figma.com/api/mcp/asset/91cca3c1-e359-47b6-8304-bef0f7a097a1",
      },
      {
        type: "image",
        heading: "Design Process",
        image: "https://www.figma.com/api/mcp/asset/3272a971-6313-4d30-8160-890870221b26",
      },
      {
        type: "image",
        heading: "User Personas & Pain Points",
        image: "https://www.figma.com/api/mcp/asset/f4b43c97-dd67-4804-b6a5-f136d650dab2",
      },
      {
        type: "image",
        heading: "Usability Test & Feedback",
        image: "https://www.figma.com/api/mcp/asset/6d580c5f-97f8-465f-9bf9-0885ed4bf1de",
      },
      {
        type: "image",
        heading: "Feedback and Fixes for Interface Improvements",
      },
      {
        type: "image",
        heading: "Competitive Analysis",
        image: "https://www.figma.com/api/mcp/asset/fdc351bb-4abc-45d5-8539-89179d321f4a",
      },
    ],
  },
  {
    slug: "trackguard",
    title: "TrackGuard – Protect Your Vehicle",
    subtitle: "Responsible for the UI/UX design of the TrackGuard app",
    label: "Case Study 2024",
    heroImage: "",
    heroVideo: "/media/trackguard-hero.mp4",
    role: ["User Experience Design", "User Interface Design"],
    team: "Rachel Pham, Riley Kwon, Hannah Vo, Chonin Aye, Ayumi Maehara",
    timeline: "Nov 2024 – Jan 2025",
    tools: ["Figma", "Miro", "Illustrator", "Google Forms"],
    overview:
      "TrackGuard is a vehicle security and tracking app designed to give car owners peace of mind. I led the UI/UX design, working collaboratively with a team of five designers to create a cohesive and intuitive experience.",
    sections: [],
  },
  {
    slug: "ideas-to-impact",
    title: "Ideas to Impact",
    subtitle: "Event branding and design for Mohawk College's annual innovation showcase",
    heroSubtitle: "Strengthening Community Innovation",
    label: "Event 2026",
    heroImage: "",
    heroVideo: "/media/ideas-to-impact-hero.mp4",
    role: ["Visual Designer"],
    team: "Business Development and Project Support",
    timeline: "Dec 2025 - Mar 2026",
    tools: ["Figma", "Illustrator", "Photoshop"],
    platform: "In-person",
    overview:
      "Ideas to Impact is Mohawk College's annual event celebrating student and faculty innovation. I designed the complete brand identity and all event collateral including social media graphics, signage, and presentation materials.",
    sections: [],
  },
  {
    slug: "fhir-north",
    title: "FHIR North",
    subtitle: "Brand and social media design for Canada's FHIR Conference",
    heroSubtitle:
      "Graphic and web design for Canada's leading digital health interoperability conference.",
    label: "Event 2025",
    heroImage: "",
    heroVideo: "/media/fhir-north-hero.mp4",
    role: ["Graphic Designer", "Brand Designer"],
    team: "Mohawk College – MEDIC",
    timeline: "2024",
    tools: ["Figma", "Illustrator", "Photoshop"],
    overview:
      "For FHIR North 2025 — Canada's digital health conference for HL7 FHIR interoperability — I worked across UX, motion, web, marketing, event video, and on-site support with the Business Development team.",
    sections: [],
  },
  {
    slug: "sweet-sunset",
    title: "Sweet Sunset",
    subtitle: "Designed the brand identity for Sweet Sunset restaurant",
    label: "Freelance 2023",
    heroImage: "/media/Mockup.jpg",
    role: ["Brand Identity Designer"],
    team: "Solo project",
    timeline: "6 months",
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    overview:
      "Sweet Sunset is a fresh take on the café experience in Toronto, bringing together Vietnamese coffee and Da Lat breakfast culture in a warm, modern space. The goal was a memorable brand that stands out while staying approachable.",
    sections: [],
  },
  {
    slug: "vot-coffee",
    title: "Vot Coffee",
    subtitle: "Designed the brand identity for Vot Coffee brand",
    label: "Freelance 2023",
    heroImage: "/media/vot-coffee-hero-final.png",
    role: ["Brand Identity Designer"],
    team: "Solo project",
    timeline: "6 months",
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    overview:
      "Vot coffee is a new brand coffee in Canada. This coffee business specialises in Vietnamese coffee beans and \"tra da,\" the national beverage of Vietnam. Made with high-quality ingredients gathered from Vietnamese farmers and traditional techniques. Vot's unique ideology is based on their desire to merge heritage with modernity.",
    sections: [],
  },
];

export function getProject(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = [
  {
    slug: "social-robots",
    title: "Social Robots",
    subtitle: "Design of 600 services to to mitigate lonely situation (dondinos). 3D security for your vehicles.",
    label: "2025",
    labelPrefix: "Product Design",
    image: "https://www.figma.com/api/mcp/asset/e19b9f2a-b266-4f23-9e54-e8a3fd85e6f1",
    size: "large",
    darkCard: true,
  },
  {
    slug: "cashpay",
    title: "CashPay",
    subtitle: "Making it your world's — it works for — A line for the future's projects.",
    label: "2023",
    labelPrefix: "Case Study",
    image: "",
    size: "large",
    darkCard: false,
  },
  {
    slug: "trackguard",
    title: "TrackGuard",
    subtitle: "A XAAS video project — Inner libre protection for your vehicles.",
    label: "2024",
    labelPrefix: "Case Study",
    image: "",
    size: "small",
    darkCard: true,
  },
  {
    slug: "applied-research-101",
    title: "Applied Research 101",
    subtitle: "Designing visuals for AR 101 courses for students, faculty & high school.",
    label: "2024",
    labelPrefix: "Project",
    image: "/media/applied-research-101-hero-laptop.png",
    size: "small",
    darkCard: false,
  },
];

export const eventProjects = [
  {
    slug: "sweet-sunset",
    title: "Sweet Sunset",
    subtitle: "I was responsible for designing the visual identity for Sweet Sunset, a brand consisting of illustrations, brand guidelines, product mockups and a comprehensive brand language.",
    label: "2023",
    labelPrefix: "Freelance",
    image: "/media/Mockup.jpg",
    darkCard: false,
  },
  {
    slug: "ideas-to-impact",
    title: "Ideas to Impact",
    subtitle: "I was responsible for designing the visual identity for Ideas to Impact, including brand guidelines, presentation materials, and marketing assets.",
    label: "2025",
    labelPrefix: "Event",
    image: "",
    darkCard: true,
  },
  {
    slug: "fhir-north",
    title: "FHIR North",
    subtitle: "Canada's FHIR Conference",
    label: "2024",
    labelPrefix: "Event",
    image: "",
    darkCard: true,
  },
  {
    slug: "vot-coffee",
    title: "Vot Coffee",
    subtitle: "Vietnamese coffee brand identity merging heritage with modernity.",
    label: "2023",
    labelPrefix: "Freelance",
    image: "/media/vot-coffee-box-bag-mockup.png",
    darkCard: false,
  },
];

export const testimonials = [
  {
    name: "Fred.C",
    role: "",
    text: "She was the perfect design partner for the brand vision we executed, helping with numerous B2B-targeted, 100+ attendee events",
    rating: 5,
    color: "#000000",
  },
  {
    name: "Kyven. C",
    role: "",
    text: "Rachel is incredibly creative and easy to work with. She listened carefully to what I wanted and turned my ideas into something even better than I imagined.",
    rating: 5,
    color: "#8B85F9",
  },
  {
    name: "Mykul. A",
    role: "",
    text: "Just wanted to give you a shout-out for getting 100% in VWD5! A very rare occurrence in this class! Amazing work this semester!!!",
    rating: 5,
    color: "#F1F3F7",
  },
  {
    name: "Shrishti. S",
    role: "",
    text: "Rachel was quite shy when she first started, but she has grown into a confident team member and is now a valued part of the team.",
    rating: 5,
    color: "#FFFFFF",
  },
  {
    name: "Simon F.",
    role: "",
    text: "Rachel was great to have on the team during her internship. She's creative, easy to work with, and always took the time to understand what was needed.",
    rating: 5,
    color: "#D2E77B",
  },
];
