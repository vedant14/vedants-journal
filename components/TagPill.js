import Link from "next/link";

export function TagPill({ tag }) {
  return (
    <div className="bg-zinc-200 text-zinc-500 px-2 py-[0.5] w-fit h-fit rounded-full text-sm">
      <Link href="/tag">{tag}</Link>
    </div>
  );
}
