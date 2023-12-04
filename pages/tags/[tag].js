// pages/notes/[tag].js
import React from "react";
import { useRouter } from "next/router";
import { getNoteData } from "../../utils/notes";
import Link from "next/link";
import { BlogTitle } from "../../components/BlogTitle";
import { TagPill } from "../../components/TagPill";
import { Dividerwithbutton } from "../../components/Divider";

function NotesByTag({ notes }) {
  const router = useRouter();
  const { tag } = router.query;

  if (!notes) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Dividerwithbutton
        text={`Notes with tag: ${tag}`}
        buttonText="clear tag filter"
      />
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
