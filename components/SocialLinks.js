import Link from "next/link";
import { socialLinks } from "./SocialIcons";
export function SocialLinks() {
  return (
    <div className="mt-6 flex gap-6">
      {socialLinks.map((socialLink) => (
        <Link
          key={socialLink.name}
          className="group -m-1 p-1"
          href={socialLink.link}
          target="_blank"
          aria-label={socialLink.name}
        >
          <socialLink.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
      ))}
    </div>
  );
}
