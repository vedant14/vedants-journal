// pages/index.js
import React from "react";
import { getNoteData } from "../../utils/notes";
import { BlogTitle } from "../../components/BlogTitle";
import { Divider } from "../../components/Divider";
import { SEO } from "../../components/SEO";
import { Container } from "../../components/Container";

export default function Notes({ notes }) {
  return (
    <Container>
      <SEO title="Notes" description="All my notes" />
      <Divider text="My notes" />
      <ul>
        {notes.map((note, i) => (
          <div key={i}>
            <BlogTitle note={note} />
          </div>
        ))}
      </ul>
    </Container>
  );
}

export async function getStaticProps() {
  const notes = getNoteData();
  return {
    props: {
      notes,
    },
  };
}
