// pages/index.js
import React from "react";
import { getNoteData } from "../../utils/notes";
import { BlogTitle } from "../../components/BlogTitle";
import { Divider } from "../../components/Divider";
import { SEO } from "../../components/SEO";

export default function Notes({ notes }) {
  return (
    <div>
      <SEO title="Notes" description="All my notes" />
      <Divider text="My notes" />
      <ul>
        {notes.map((note, i) => (
          <div key={i}>
            <BlogTitle note={note} />
          </div>
        ))}
      </ul>
    </div>
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
