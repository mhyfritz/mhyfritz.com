import {
  BlogIcon,
  CodePenIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "@/components/icons";

export interface Link {
  title: string;
  id: string;
  url: string;
  icon: any;
}

export const links: Link[] = [
  {
    title: "Blog",
    id: "blog",
    url: "/blog/",
    icon: BlogIcon,
  },
  {
    title: "LinkedIn",
    id: "linkedin",
    url: "https://www.linkedin.com/in/mhyfritz",
    icon: LinkedInIcon,
  },
  {
    title: "GitHub",
    id: "github",
    url: "https://github.com/mhyfritz",
    icon: GitHubIcon,
  },
  {
    title: "CodePen",
    id: "codepen",
    url: "https://codepen.io/mhyfritz",
    icon: CodePenIcon,
  },
  {
    title: "Stack Overflow",
    id: "stackoverflow",
    url: "https://stackoverflow.com/users/772606/mhyfritz",
    icon: StackOverflowIcon,
  },
];
