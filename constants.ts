// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Dinesh Kumar",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://dineshonweb.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "dineshkumarrrr@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/iamdineshkumar/",
  github: "https://github.com/CodedDecoded",
  instagram: "https://www.instagram.com/dineshslays/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Techcrook - WordPress based Crypto Blog",
    image: "/projects/techcrook_blog.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect Blog for Techcrook",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://techcrook.com",
    tech: ["typescript", "figma", "angular"],
  },
  {
    name: "CapitalLaundry - Laundry for Gurgaon",
    image: "/projects/capitallaundry.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "CapitalLaundry.com",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    tech: ["react", "next", "gsap", "tailwind"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "typescript",
    "bootstrap",
    "vuejs",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "d3js",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "jira"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2025(Current)",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Software Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Micro front-end-based UI Portal development Pre-market AI forecasting tool Aviso based on Vue.js used by Lenovo and Cisco 😎",
    image: "/timeline/programming.svg",
    slideImage: "/timeline/Aviso.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT Analyst C2",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, Changed a High-end Liferay based analytical tool to Angular 17, saving a lot of $$ for client😎",
    image: "/timeline/tcs-logo-1.svg",
    slideImage: "/timeline/tcs-page.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT Analyst C1",
    size: ItemSize.SMALL,
    subtitle: "Moved an AngularJS billing module to Liferay CMS, Migrated to Data Warehourse and UI revamp!!",
    image: "/timeline/tcs-logo-1.svg",
    slideImage: "/timeline/tcs-page.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked with USAs biggest business listing advertisers, created Dashboards, Analytics reports with excellent User Experiences",
    image: "/timeline/teamware.png",
    slideImage: "/timeline/dashboard.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Easytoask.org (Volunteer)",
    size: ItemSize.SMALL,
    subtitle: "Providing information about Oxygen Cylinders, Hospital Beds at the time of peak Covid-19 outbreak",
    image: "/timeline/easytoask.png",
    slideImage: "/timeline/Easytoask.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development and worked for 20+ websites, landing pages, mini web games with web optimizations",
    image: "/timeline/timeuslogo.png",
    slideImage: "/timeline/timeus.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from Delhi University 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Completed Bachelor of Technology in Computer Science! with 7.2CGPA",
    image: "/timeline/du.png",
    slideImage: "/timeline/degreed.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Created a portfolio website for our College's Computer Science department head.",
    slideImage: "/timeline/arpita.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "dubpc.org",
    size: ItemSize.SMALL,
    subtitle: "Created Website for Computer Science Department Placement Cell, which later provided placement offer to our students.",
    slideImage: "/timeline/DUBPC.gif",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2013",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
