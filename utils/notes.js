import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "journal");

export function getNoteData(tag = null) {
  const fileNames = fs.readdirSync(notesDirectory);

  const notesData = fileNames
    .filter((fileName) => fileName.endsWith(".md")) // Only pick up .md files
    .map((fileName) => {
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        fileName,
        ...matterResult.data,
        content: matterResult.content,
      };
    })
    .filter((note) => note.date && note.title && note.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (tag) {
    // Filter notes by the specified tag
    return notesData.filter((note) => {
      const tags = note.tag;

      // Check if tags exist and is an array
      if (Array.isArray(tags)) {
        return tags.includes(tag);
      }

      // Check if tags is a string and includes the specified tag
      if (typeof tags === "string") {
        return tags
          .split(",")
          .map((t) => t.trim())
          .includes(tag);
      }

      // Handle cases where tags is null or not an array or string
      return false;
    });
  }

  return notesData;
}
