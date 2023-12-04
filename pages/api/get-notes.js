// pages/api/notes.js
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // Import the 'matter' library

export default (req, res) => {
  try {
    // Specify the path to your notes directory
    const notesDirectory = path.join(process.cwd(), "journal");

    const fileNames = fs.readdirSync(notesDirectory);

    // Extract slugs from frontmatter
    const slugs = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const fullPath = path.join(notesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Assuming "slug" is a property in the frontmatter
        return data.slug || fileName.replace(/\.md$/, "");
      });

    res.status(200).json(slugs);
  } catch (error) {
    console.error("Error reading notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
