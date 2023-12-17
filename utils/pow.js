import fs from "fs";
import path from "path";
import matter from "gray-matter";

const powDirectory = path.join(process.cwd(), "data/pow");

export function getPOWData(tag = null) {
  const fileNames = fs.readdirSync(powDirectory);

  const notesData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(powDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      // Serialize the date property to a string
      return {
        fileName,
        ...matterResult.data,
        content: matterResult.content,
      };
    });

  // Convert date to string before returning
  return JSON.parse(JSON.stringify(notesData));
}
