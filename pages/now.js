import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Divider } from "../components/Divider";
import { Container } from "../components/Container";
import { formatDate } from "../utils/lib";
import { Layout } from "../components/Layout";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "now.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  return {
    props: {
      date: formatDate(matterResult.data.date),
      content: matterResult.content,
    },
  };
}

export default function Sprints({ content, date }) {
  return (
    <Layout>
      <Container>
        <h1 className="text-4xl font-bold tracking-tight leading-[50px] text-zinc-800 sm:text-5xl">
          What am I focusing on now?
        </h1>
        <Divider text={`last updated: ${date}`} />
        <ReactMarkdown className="prose">{content}</ReactMarkdown>
      </Container>
    </Layout>
  );
}
