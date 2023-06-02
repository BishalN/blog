import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://bishalneupane.com/",
  author: "Bishal Neupane",
  desc: "Indie Hacker, Developer, and Designer. I write about my journey as a developer and share my learnings.",
  title: "BN",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/bishaln",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/bishaltwt",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/bishaln",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/bishaln",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
];
