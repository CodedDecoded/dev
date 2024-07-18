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
    name: "Techcrook - WordPress Blog",
    image: "/projects/techcrook_blog.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect Blog for Techcrook",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://techcrook.com",
    tech: ["typescript", "figma", "angular"],
  },
  // {
  //   name: "myOKR Website",
  //   image: "/projects/myokr.jpg",
  //   blurImage: "/projects/blur/myokr-blur.jpg",
  //   description: "Marketing site for OKR Platform by huminos",
  //   gradient: ["#153BB9", "#0E2C8B"],
  //   url: "https://www.huminos.com/",
  //   tech: ["react", "next", "gsap", "tailwind"],
  // },
  // {
  //   name: "DLT Labs Website",
  //   image: "/projects/dlt-website.jpg",
  //   blurImage: "/projects/blur/dlt-website-blur.jpg",
  //   description: "Marketing site with an Internal CMS from scratch",
  //   gradient: ["#245B57", "#004741"],
  //   url: "https://www.dltlabs.com/",
  //   tech: ["figma", "angular", "gsap"],
  // },
  // {
  //   name: "DL Unify",
  //   image: "/projects/dl-unify.jpg",
  //   blurImage: "/projects/blur/dl-unify-blur.jpg",
  //   description: "Built the application from zero to production 🚀",
  //   gradient: ["#003052", "#167187"],
  //   url: "https://dlunify.com/",
  //   tech: ["tailwind", "angular", "gsap", "figma"],
  // },
  // {
  //   name: "ngx-quill-upload",
  //   image: "/projects/ngx-quill-upload.jpg",
  //   blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
  //   description: "NPM Package for Quill JS uploads from Angular",
  //   gradient: ["#3A0000", "#771E1E"],
  //   url: "https://www.npmjs.com/package/ngx-quill-upload",
  //   tech: ["npm", "angular", "typescript"],
  // },
  // {
  //   name: "Huminos website",
  //   image: "/projects/huminos.jpg",
  //   blurImage: "/projects/blur/huminos-blur.jpg",
  //   description: "Marketing site for Huminos bots for workplace by facebook",
  //   gradient: ["#17007B", "#3A2C79"],
  //   url: "https://bots.huminos.com/",
  //   tech: ["javascript", "sass", "svg", "gulp"],
  // },
  // {
  //   name: "AKGEC - College Website",
  //   image: "/projects/akgec.jpg",
  //   blurImage: "/projects/blur/akgec-blur.jpg",
  //   description: "Contributed in overall design and development",
  //   gradient: ["#5E4C06", "#746528"],
  //   url: "https://www.akgec.ac.in/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Alpha Aesthetics",
  //   image: "/projects/alpha.jpg",
  //   blurImage: "/projects/blur/alpha-blur.jpg",
  //   description: "Designed and developed the platform",
  //   gradient: ["#172839", "#334659"],
  //   url: "https://alpha-aesthetics.ayushsingh.net/",
  //   tech: ["illustrator", "javascript", "angular"],
  // },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 🔥",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Scrolls 2017 - Website",
  //   image: "/projects/scrolls.jpg",
  //   blurImage: "/projects/blur/scrolls-blur.jpg",
  //   description: "Built the portal from zero to production 🚀",
  //   gradient: ["#685506", "#7B6921"],
  //   url: "https://scrolls-17.ayushsingh.net/",
  //   tech: ["angular", "html", "css"],
  // },
  // {
  //   name: "Cardize - Visiting Cards",
  //   image: "/projects/cardize.jpg",
  //   blurImage: "/projects/blur/cardize-blur.jpg",
  //   description: "First web project! Custom visiting card generator",
  //   gradient: ["#552A04", "#614023"],
  //   url: "https://cardize.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
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
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2023",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Speaker at React India",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
  //   image: "/timeline/reactindia.svg",
  //   slideImage: "/timeline/reactindia.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024 (Current)",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
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
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2023",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "IT Analyst C1",
    size: ItemSize.SMALL,
    subtitle:
      "Moved an AngularJS billing module to Liferay CMS, Migrated to Data Warehourse and UI revamp!!",
    image: "/timeline/tcs-logo-1.svg",
    slideImage: "/timeline/tcs-page.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
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
    slideImage: "/timeline/huminos-freelance.jpg",
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
    alignment: Branch.LEFT,
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
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Data Analytical Tool",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Created a highly complex Data Analytical Tool for a competitors in cosmetics",
  //   image: "/timeline/dltlabs.svg",
  //   slideImage: "/timeline/dlt-website.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Developer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development and worked for 20+ websites, landing pages, mini web games with web optimizations",
    image: "/timeline/timeuslogo.png",
    slideImage: "/timeline/timeus.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/du.png",
    slideImage: "/timeline/degreed.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
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
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Student lead at SDC-SI",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-head.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on SVG animations",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

  //   slideImage: "/timeline/svg-lecture.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "1st position in Web Designing, IMSU",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed against 20+ teams for design and development of web project from scratch",
  //   slideImage: "/timeline/ims-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Lecture on Javascript",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
  //   slideImage: "/timeline/js-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },

  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2017",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Competed Java Certification",
  //   slideImage: "/timeline/abes-17.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.RIGHT,
  // },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Created a portfolio website for our College's Computer Science department head.",
    slideImage: "/timeline/arpita.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "2016",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.RIGHT,
  // },
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
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "",
  //   size: ItemSize.LARGE,
  //   shouldDrawLine: false,
  //   alignment: Branch.LEFT,
  // },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "UI/UX, Frontend Engineer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "",
  //   image: "/timeline/si.svg",
  //   slideImage: "/timeline/si-start.jpg",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2013",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  // {
  //   type: NodeTypes.CHECKPOINT,
  //   title: "Web Developer",
  //   size: ItemSize.SMALL,
  //   subtitle:
  //     "Created a portfolio website for our College's Computer Science department head.",
  //   image: "",
  //   slideImage: "/timeline/arpita.png",
  //   shouldDrawLine: true,
  //   alignment: Branch.LEFT,
  // },
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
