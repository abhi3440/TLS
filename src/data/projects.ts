export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  details: {
    about: string[];
    contribution: string[];
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "Fashion Retailer",
    description: "Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversion rate.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-commerce", "UI/UX", "Web Development"],
    link: "#",
    details: {
      about: [
        "The client, a leading fashion retailer, was facing declining conversion rates due to an outdated and unintuitive online platform.",
        "Our task was to conduct a complete overhaul of their e-commerce website, focusing on user experience, performance, and mobile-first design to create a seamless shopping journey for customers."
      ],
      contribution: [
        "Conducted in-depth user research and UX audits to identify pain points.",
        "Designed a modern, clean UI with a streamlined checkout process.",
        "Developed the new platform on a scalable architecture for improved performance and easier maintenance.",
        "Integrated advanced features like personalized recommendations and a visual search tool.",
        "The project resulted in a 40% increase in conversion rate and a 60% improvement in page load times."
      ]
    }
  },
  {
    id: "social-media-growth-campaign",
    title: "Social Media Growth Campaign",
    client: "Food & Beverage Brand",
    description: "Strategic social media campaign that grew following by 200% and engagement by 150% in 3 months.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Social Media", "Content Strategy", "Growth"],
    link: "#",
    details: {
        about: [
            "A new food & beverage brand was struggling to gain traction and build a community on social media platforms.",
            "The goal was to rapidly increase brand awareness, follower count, and user engagement through a targeted and creative social media strategy."
        ],
        contribution: [
            "Developed a content strategy centered around high-quality visuals, user-generated content campaigns, and influencer collaborations.",
            "Launched targeted ad campaigns to reach specific audience segments, optimizing for engagement and follower growth.",
            "Managed community interactions to foster a loyal and active follower base.",
            "The campaign achieved a 200% increase in followers across key platforms and boosted engagement by 150% within a three-month period."
        ]
    }
  },
  {
    id: "saas-marketing-website",
    title: "SaaS Marketing Website",
    client: "Tech Startup",
    description: "Design and development of a high-converting marketing website that increased demo signups by 80%.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Web Design", "Development", "SaaS"],
    link: "#",
    details: {
        about: [
            "A promising tech startup needed a compelling marketing website to communicate their value proposition and convert visitors into leads.",
            "The primary objective was to design and build a website optimized for converting visitors into demo signups for their SaaS product."
        ],
        contribution: [
            "Crafted a compelling narrative and clear messaging that resonated with the target audience.",
            "Designed a user-centric layout with intuitive navigation and prominent calls-to-action.",
            "Developed a fast, responsive, and SEO-friendly website from the ground up.",
            "A/B tested various headlines, layouts, and CTAs to maximize conversion rates.",
            "The new website led to an 80% increase in qualified demo signups and a 50% reduction in bounce rate."
        ]
    }
  },
  {
    id: "brand-identity-design",
    title: "Brand Identity Design",
    client: "Wellness Company",
    description: "Complete brand identity redesign including logo, guidelines, and marketing materials.",
    image: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Branding", "Design", "Identity"],
    link: "#",
     details: {
        about: [
            "An established wellness company sought to refresh its brand identity to better connect with a younger, modern audience.",
            "The project involved a complete redesign of their visual identity, including the logo, color palette, typography, and all associated marketing collateral."
        ],
        contribution: [
            "Conducted market research and brand workshops to define the new brand strategy and positioning.",
            "Designed a versatile and modern logo and a comprehensive set of brand guidelines.",
            "Created a suite of marketing materials, including packaging, social media templates, and digital ad creatives.",
            "The new brand identity was successfully launched, leading to a significant increase in social media engagement and positive customer feedback."
        ]
    }
  }
];