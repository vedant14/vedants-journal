import Link from "next/link";
import { TagsAndDate } from "./TagsAndDate";

export function BlogTitle({ note }) {
  return (
    <li className="my-8 lowercase">
      <Link href={`/notes/${note.slug}`}>
        <p className="text-lg font-medium">{note.title}</p>
        <p className="text-zinc-500">{note.description}</p>
        <TagsAndDate date={note.date} tagData={note.tag} />
      </Link>
    </li>
  );
}
