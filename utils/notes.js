// utils/notes.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "notes");

export function getNoteData(tag = null) {
  const fileNames = fs.readdirSync(notesDirectory);

  const notesData = fileNames
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
    return notesData.filter((note) => note.tag && note.tag.includes(tag));
  }

  return notesData;
}
