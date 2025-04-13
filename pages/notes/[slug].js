// pages/notes/[slug].js
import React from "react";
import { getNoteData } from "../../utils/notes";
import ReactMarkdown from "react-markdown";
import { Dividerwithbutton } from "../../components/Divider";
import { TagsAndDate } from "../../components/TagsAndDate";
import { SEO } from "../../components/SEO";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";

function Note({ note }) {
  return (
    <Layout>
      <SEO title={note.title} description={note.description} />
      <Container>
        <p className="text-xl mb-2 font-medium">{note.title}</p>
        <TagsAndDate date={note.date} tagData={note.tag} />
        <Dividerwithbutton />
        <article className="prose">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </article>
      </Container>
    </Layout>
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
