import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "journal");

export function getNoteData() {
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

  return notesData;
}
