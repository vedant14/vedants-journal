import { TagPill } from "./TagPill";

export function TagsAndDate({ date, tagData }) {
  const tagsArray = tagData?.split(",");
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-zinc-500">{date}</span>
      {tagsArray && <span className="text-zinc-500">•</span>}
      {tagsArray?.map((tag, i) => (
        <div key={i}>
          <TagPill tag={tag} />
        </div>
      ))}
    </div>
  );
}
