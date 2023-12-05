import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { formatDate } from "./lib";

const notesDirectory = path.join(process.cwd(), "journal");

export function getNoteData(tag = null) {
  const fileNames = fs.readdirSync(notesDirectory);

  const notesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // Serialize the date property to a string
      return {
        fileName,
        ...matterResult.data,
        date: formatDate(matterResult.data.date),
        content: matterResult.content,
      };
    })
    .filter((note) => note.date && note.title && note.slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (tag) {
    return notesData.filter((note) => {
      const tags = note.tag;

      return (
        (Array.isArray(tags) && tags.includes(tag.toLowerCase())) ||
        (typeof tags === "string" &&
          tags
            .split(",")
            .map((t) => t.trim().toLowerCase())
            .includes(tag.toLowerCase()))
      );
    });
  }

  // Convert date to string before returning
  return JSON.parse(JSON.stringify(notesData));
}
