import Link from "next/link";

export function BlogTitle({ note }) {
  return (
    <li className="my-4">
      <Link href={`/notes/${note.slug}`}>
        <p className="text-lg font-medium">{note.title}</p>
        <p className="text-zinc-500">{note.description}</p>
        <p className="text-zinc-400">{note.date}</p>
      </Link>
    </li>
  );
}
