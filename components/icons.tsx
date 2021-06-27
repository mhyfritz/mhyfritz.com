import CodePen from "simple-icons/icons/codepen.svg";
import GitHub from "simple-icons/icons/github.svg";
import LinkedIn from "simple-icons/icons/linkedin.svg";
import StackOverflow from "simple-icons/icons/stackoverflow.svg";
export {
  AnnotationIcon as BlogIcon,
  ArrowNarrowRightIcon,
  HomeIcon,
} from "@heroicons/react/outline";

export function GitHubIcon({ className = "", ...rest }) {
  return <GitHub className={`fill-current ${className}`} {...rest} />;
}

export function LinkedInIcon({ className = "", ...rest }) {
  return <LinkedIn className={`fill-current ${className}`} {...rest} />;
}

export function CodePenIcon({ className = "", ...rest }) {
  return <CodePen className={`fill-current ${className}`} {...rest} />;
}

export function StackOverflowIcon({ className = "", ...rest }) {
  return <StackOverflow className={`fill-current ${className}`} {...rest} />;
}
