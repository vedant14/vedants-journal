// pages/notes/[slug].js
import React from "react";
import { getNoteData } from "../../utils/notes";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

function Note({ note }) {
  const tagsArray = note.tag?.split(",");
  return (
    <div>
      {tagsArray?.map((tag, i) => (
        <div key={i}>
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </div>
      ))}
      <h1 className="text-xl">{note.title}</h1>
      <p>{note.date}</p>
      <ReactMarkdown>{note.content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const notes = getNoteData();
  const paths = notes.map((note) => ({
    params: { slug: note.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const notes = getNoteData();
  const note = notes.find((n) => n.slug === slug);

  return {
    props: {
      note,
    },
  };
}

export default Note;
