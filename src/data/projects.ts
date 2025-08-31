// Import the images from the assets folder
import sweatasticHero from '../assets/projects/sweatastic-hero.jpg';
import sweatasticInstagram from '../assets/projects/sweatastic-instagram.jpg';
import sweatasticAmazon from '../assets/projects/sweatastic-amazon-listing.jpg';
import sweatasticBackend from '../assets/projects/sweatastic-backend.jpg';

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  galleryImages?: string[];
  details: {
    about: { title: string; content: string[] };
    sections: { title: string; content: string[] }[];
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    client: "Fashion Retailer",
    description: "Complete redesign and development of an e-commerce platform, resulting in 40% increase in conversion rate.",
    // Use the imported image variable for the portfolio grid
    image: sweatasticHero, 
    tags: ["E-commerce", "UI/UX", "Web Development"],
    link: "#",
    
    // Use the imported image variables for the detail page gallery
    galleryImages: [
      sweatasticHero,
      sweatasticInstagram,
      sweatasticAmazon,
      sweatasticBackend,
    ],
    details: {
      about: {
        title: "About the Brand: Sweatastic",
        content: [
          "Sweatastic is an emerging activewear brand built with a vision to unite fitness enthusiasts through high-quality apparel, community-driven initiatives, and an active lifestyle.",
          "When they approached us, the goal was clear: to create a strong online presence, build a sales-driven platform, and scale their business across digital channels."
        ],
      },
      sections: [
        {
          title: "How We Built & Scaled Sweatastic",
          content: [
            "<strong>Website Development & E-commerce Setup:</strong> We created a responsive, high-converting e-commerce platform with a clean, modern interface, seamless navigation, and secure checkout to reflect the brand's premium identity.",
            "<strong>Social Media Management & Content Strategy:</strong> We positioned Sweatastic as a fitness community by curating a content mix of lifestyle posts, product highlights, and fitness challenges, engaging followers through polls, reels, and live sessions.",
            "<strong>Influencer & Affiliate Marketing:</strong> To expand reach, we onboarded fitness influencers as brand partners and built a commission-based affiliate program, leveraging authentic content to boost trust and conversions.",
            "<strong>Paid & Organic E-commerce Growth:</strong> We ran high-ROI paid campaigns on Meta & Google, optimized SEO for long-term organic traffic, and implemented remarketing strategies to foster repeat customers."
          ],
        },
        {
          title: "Key Results Achieved",
          content: [
            "Built a scalable e-commerce platform from scratch.",
            "Achieved a 30%+ increase in sales through influencer-driven affiliate marketing.",
            "Established Sweatastic as a fitness-first community brand across social media.",
            "Drove consistent sales growth with a mix of organic and paid strategies."
          ],
        },
      ],
    },
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
        about: {
          title: "About the Project",
          content: [
            "A new food & beverage brand was struggling to gain traction and build a community on social media platforms.",
            "The goal was to rapidly increase brand awareness, follower count, and user engagement through a targeted and creative social media strategy."
          ]
        },
        sections: [{
          title: "Our Contribution",
          content: [
            "Developed a content strategy centered around high-quality visuals, user-generated content campaigns, and influencer collaborations.",
            "Launched targeted ad campaigns to reach specific audience segments, optimizing for engagement and follower growth.",
            "Managed community interactions to foster a loyal and active follower base.",
            "The campaign achieved a 200% increase in followers across key platforms and boosted engagement by 150% within a three-month period."
          ]
        }]
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
        about: {
          title: "About the Project",
          content: [
            "A promising tech startup needed a compelling marketing website to communicate their value proposition and convert visitors into leads.",
            "The primary objective was to design and build a website optimized for converting visitors into demo signups for their SaaS product."
          ]
        },
        sections: [{
          title: "Our Contribution",
          content: [
            "Crafted a compelling narrative and clear messaging that resonated with the target audience.",
            "Designed a user-centric layout with intuitive navigation and prominent calls-to-action.",
            "Developed a fast, responsive, and SEO-friendly website from the ground up.",
            "A/B tested various headlines, layouts, and CTAs to maximize conversion rates.",
            "The new website led to an 80% increase in qualified demo signups and a 50% reduction in bounce rate."
          ]
        }]
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
        about: {
          title: "About the Project",
          content: [
            "An established wellness company sought to refresh its brand identity to better connect with a younger, modern audience.",
            "The project involved a complete redesign of their visual identity, including the logo, color palette, typography, and all associated marketing collateral."
          ]
        },
        sections: [{
          title: "Our Contribution",
          content: [
            "Conducted market research and brand workshops to define the new brand strategy and positioning.",
            "Designed a versatile and modern logo and a comprehensive set of brand guidelines.",
            "Created a suite of marketing materials, including packaging, social media templates, and digital ad creatives.",
            "The new brand identity was successfully launched, leading to a significant increase in social media engagement and positive customer feedback."
          ]
        }]
    }
  }
];