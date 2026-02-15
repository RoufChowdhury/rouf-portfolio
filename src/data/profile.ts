// ============================================================
// PORTFOLIO CONFIGURATION
// ============================================================
// Edit this file to personalize your portfolio.
// 1. Replace the photo in /public/photo.jpg with your own
// 2. Update all sections below with your details
// 3. Run `npm run dev` to preview, `npm run build` to deploy
// ============================================================

export const profile = {
  // --- BASIC INFO ---
  name: "Your Name",
  tagline: "Your Professional Title",
  subtitle: "A short sentence about what you do and what drives you.",
  email: "you@example.com",
  location: "City, Country",
  photo: "/photo.jpg", // Place your photo at /public/photo.jpg

  // --- SOCIAL LINKS (set to "" to hide) ---
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    twitter: "", // leave empty to hide
    website: "", // leave empty to hide
  },

  // --- ABOUT ---
  about: {
    heading: "About Me",
    description:
      "Write 2-3 sentences about yourself. Highlight your expertise, passions, and what makes you unique. This is the first thing visitors will read after your hero section.",
    highlights: [
      {
        title: "Your Specialty",
        description: "Brief description of what you do in this area.",
        icon: "Lightbulb", // Lucide icon name
      },
      {
        title: "Another Strength",
        description: "Brief description of another key strength.",
        icon: "TrendingUp",
      },
      {
        title: "Third Strength",
        description: "Brief description of a third area of expertise.",
        icon: "Target",
      },
    ],
  },

  // --- EXPERIENCE ---
  experience: [
    {
      role: "Senior Position Title",
      company: "Company Name",
      period: "2022 — Present",
      description:
        "Describe your role, responsibilities, and key achievements. Focus on impact and results.",
      bullets: [
        "Led a team of X people to deliver Y project",
        "Increased Z metric by X% through specific initiative",
        "Built and launched product/feature that served N users",
      ],
      tags: ["Leadership", "Strategy", "Technology"],
    },
    {
      role: "Previous Position",
      company: "Previous Company",
      period: "2019 — 2022",
      description:
        "Description of your role and what you accomplished.",
      bullets: [
        "Key achievement or responsibility",
        "Another notable accomplishment",
      ],
      tags: ["Skill 1", "Skill 2", "Skill 3"],
    },
    {
      role: "Earlier Position",
      company: "Earlier Company",
      period: "2017 — 2019",
      description: "Description of your earlier role.",
      bullets: [
        "Key achievement",
        "Another accomplishment",
      ],
      tags: ["Skill A", "Skill B"],
    },
  ],

  // --- PROJECTS / RESEARCH ---
  projects: [
    {
      title: "Project One",
      organization: "Organization or Client",
      year: "2023",
      role: "Lead / Contributor",
      description:
        "Describe the project, your role, and the outcome. Keep it concise but impactful.",
      tags: ["React", "TypeScript", "AI"],
      link: "", // optional URL
    },
    {
      title: "Project Two",
      organization: "Organization",
      year: "2022",
      role: "Developer",
      description: "What you built and why it mattered.",
      tags: ["Python", "Data Science"],
      link: "",
    },
    {
      title: "Project Three",
      organization: "Personal / Open Source",
      year: "2021",
      role: "Creator",
      description: "Description of the project.",
      tags: ["Node.js", "AWS"],
      link: "",
    },
  ],

  // --- SKILLS ---
  skills: [
    {
      category: "Technical Skills",
      items: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "React & Next.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL & Databases", level: 75 },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS / Cloud", level: 75 },
        { name: "CI/CD Pipelines", level: 70 },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Leadership", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Project Management", level: 80 },
      ],
    },
  ],

  // --- EDUCATION ---
  education: [
    {
      degree: "M.S. in Your Field",
      school: "University Name",
      period: "2019 — 2021",
      description: "Brief description of focus, thesis, or notable achievements.",
    },
    {
      degree: "B.S. in Your Major",
      school: "University Name",
      period: "2015 — 2019",
      description: "Brief description, honors, or relevant coursework.",
    },
  ],

  // --- TESTIMONIALS ---
  testimonials: [
    {
      quote:
        "Write a testimonial from a colleague, manager, or client. Make it specific and credible.",
      author: "Person's Name",
      role: "Their Title, Company",
    },
    {
      quote: "Another testimonial highlighting your strengths.",
      author: "Another Person",
      role: "Their Title, Company",
    },
  ],
};
