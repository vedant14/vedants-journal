// pages/notes/[slug].js
import React from "react";
import { getNoteData } from "../../utils/notes";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Divider, Dividerwithbutton } from "../../components/Divider";
import { TagPill } from "../../components/TagPill";
import { TagsAndDate } from "../../components/TagsAndDate";

function Note({ note }) {
  return (
    <div>
      <p className="text-xl my-4 font-medium">{note.title}</p>
      <TagsAndDate date={note.date} tagData={note.tag} />
      <Dividerwithbutton />
      <article className="prose mt-8">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </article>
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
