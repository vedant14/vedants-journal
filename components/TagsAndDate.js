import { TagPill } from "./TagPill";

export function TagsAndDate({ date, tagData }) {
  const tagsArray = tagData?.split(",");
  return (
    <div className="sm:flex sm:space-x-2 items-center my-6 sm:my-0">
      <span className="text-zinc-500">{date}</span>
      {tagsArray && <span className="hidden sm:block text-zinc-500">•</span>}
      <div className="flex flex-wrap">
        {tagsArray?.map((tag, i) => (
          <div key={i}>
            <TagPill tag={tag} />
          </div>
        ))}
      </div>
    </div>
  );
}
