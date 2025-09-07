// Import the images from the assets folder
import sweatasticHero from '../assets/projects/sweatastic-hero.jpg';
import sweatasticInstagram from '../assets/projects/sweatastic-instagram.jpg';
import sweatasticAmazon from '../assets/projects/sweatastic-amazon-listing.jpg';
import sweatasticBackend from '../assets/projects/sweatastic-backend.jpg';

import avinyaLabs1 from '../assets/projects/avinya_labs1.png';
import avinyaLabs2 from '../assets/projects/avinya_labs2.png';

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
    sections: {
      title: string;
      subsections?: { subtitle: string; content: string[] }[];
      content?: string[];
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform-redesign",
    title: "E-Commerce Platform",
    client: "Sweatastic",
    description:
      "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate.",
    image: sweatasticHero,
    tags: ["E-commerce", "UI/UX", "Web Development"],
    link: "#",
    galleryImages: [
      sweatasticHero,
      sweatasticInstagram,
      sweatasticAmazon,
      sweatasticBackend,
    ],
    details: {
      about: {
        title: "About the Brand",
        content: [
          "Sweatastic is an emerging activewear brand built with a vision to unite fitness enthusiasts through high-quality apparel, community-driven initiatives, and an active lifestyle.",
          "When they approached us, the goal was clear: to create a strong online presence, build a sales-driven platform, and scale their business across digital channels.",
        ],
      },
      sections: [
        {
          title: "How We Built & Scaled Sweatastic",
          subsections: [
            {
              subtitle: "1. Website Development & E-commerce Setup",
              content: [
                "Created a responsive and high-converting e-commerce platform at sweatastic.in.",
                "Designed a clean, modern interface that reflects the brand's premium identity.",
                "Integrated seamless navigation, secure checkout, and mobile optimization.",
                "Structured product pages to highlight fabric quality, features, and brand story.",
                "Implemented analytics & tracking to measure customer behavior and conversions.",
              ],
            },
            {
              subtitle: "2. Social Media Management & Content Strategy",
              content: [
                "Positioned Sweatastic as a fitness community, not just an apparel brand.",
                "Curated a content mix of lifestyle posts, product highlights, and fitness challenges.",
                "Engaged followers through polls, reels, live sessions, and fitness tips.",
                "Established a brand voice that resonates with fitness enthusiasts.",
              ],
            },
            {
              subtitle: "3. Influencer & Affiliate Marketing",
              content: [
                "Onboarded fitness influencers and athletes as brand partners.",
                "Built a commission-based affiliate program to incentivize sales.",
                "Leveraged authentic influencer content to boost trust and conversions, delivering a 30% sales increase.",
              ],
            },
            {
              subtitle: "4. Paid & Organic E-commerce Growth",
              content: [
                "Ran high-ROI paid campaigns on Meta & Google Ads.",
                "Optimized SEO to drive long-term organic traffic.",
                "Implemented remarketing and retention strategies for repeat customers.",
                "Monitored sales funnel performance and scaled ad budgets strategically.",
              ],
            },
          ],
        },
        {
          title: "Key Results Achieved",
          content: [
            "Built a scalable e-commerce platform from scratch.",
            "Achieved a 30%+ increase in sales through influencer-driven affiliate marketing.",
            "Established Sweatastic as a fitness-first community brand across social media.",
            "Drove consistent sales growth with a mix of organic and paid strategies.",
          ],
        },
      ],
    },
  },
  {
    id: "product-consulting-and-development",
    title: "Product Consulting & Development",
    client: "Avinya Labs",
    description:
      "End-to-end product consulting and development, enabling Avinya Labs to bring ideas to life with scalable, innovative digital solutions.",
    image: avinyaLabs1,
    tags: ["Product Strategy",  "Web & Mobile Development", "Web3", "AI"],
    link: "#",
    galleryImages: [
      avinyaLabs1,
      avinyaLabs2,
    ],
    details: {
      about: {
        title: "About the Project",
        content: [
          "Avinya Labs is your on-demand product consulting and development team—helping startups and SMEs transform ideas into reality through flexible, full-cycle services.",
          "Known for delivering successful launches on time and on budget, their expertise spans product research, design, engineering, DevOps, QA, and project management.",
        ],
      },
      sections: [
        {
          title: "How We Collaborated with Avinya Labs",
          subsections: [
            {
              subtitle: "1. Product Research & Strategy",
              content: [
                "Conducted requirements definition, roadmapping, user research, and strategy formulation to align product vision with user needs.",
              ],
            },
            {
              subtitle: "2. UX/UI Design",
              content: [
                "Crafted user-centric visual designs, information architecture, interaction flows, and design systems for seamless usability.",
              ],
            },
            {
              subtitle: "3. Full Stack Web & Mobile Engineering",
              content: [
                "Built high-quality front-end and back-end systems with robust technical architecture, including DevOps and QA processes.",
              ],
            },
            {
              subtitle: "4. Project Management & Product Consulting",
              content: [
                "Led agile delivery through sprint planning, risk management, and resource coordination.",
                "Provided consulting for scalability, integration, feasibility, and performance optimization.",
              ],
            },
          ],
        },
        {
          title: "Key Results Achieved",
          content: [
            "Enabled fast, on-budget product launches backed by structured strategy and execution.",
            "Supported a flexible engagement model that helped clients expand their dev capacity without recruitment overhead.",
            "Delivered scalable UX/UI and engineering solutions for both web and mobile platforms.",
            "Established Avinya Labs as a reliable partner for innovation across product and Web3 initiatives.",
          ],
        },
      ],
    },
  },
];
