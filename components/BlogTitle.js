import Link from "next/link";
import { TagsAndDate } from "./TagsAndDate";

export function BlogTitle({ note }) {
  return (
    <li className="my-8 lowercase">
      <Link href={`/notes/${note.slug}`}>
        <p className="text-lg font-medium">{note.title}</p>
        <p className="text-zinc-500">{note.description}</p>
        <p className="text-zinc-400">{note.date}</p>
      </Link>
    </li>
  );
}
