// pages/notes/[tag].js
import React from "react";
import { useRouter } from "next/router";
import { getNoteData } from "../../utils/notes";
import Link from "next/link";
import { BlogTitle } from "../../components/BlogTitle";

function NotesByTag({ notes }) {
  const router = useRouter();
  const { tag } = router.query;

  if (!notes) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className="mb-8">Notes with Tag: {tag}</p>
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

export async function getServerSideProps({ params }) {
  const { tag } = params;
  const notes = getNoteData(tag);

  return {
    props: {
      notes,
    },
  };
}

export default NotesByTag;
