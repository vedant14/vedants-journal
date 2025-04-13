import Link from "next/link";
import { socialLinks } from "./SocialIcons";

const color = [
  "fill-rred",
  "fill-ggreen",
  "fill-ppurple",
  "fill-bblue",
  "fill-yyellow",
  "text-rred",
  "text-ggreen",
  "text-ppurple",
  "text-bblue",
  "text-yyellow",
];
export function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      {socialLinks.map((socialLink, i) => (
        <Link
          key={socialLink.name}
          className="group -m-1 p-1"
          href={socialLink.link}
          target="_blank"
          aria-label={socialLink.name}
        >
          <socialLink.icon className={`h-6 w-6 transition ${color[i]}`} />
        </Link>
      ))}
    </div>
  );
}
