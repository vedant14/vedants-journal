// pages/notes/[tag].js
import React from "react";
import { useRouter } from "next/router";
import { getNoteData } from "../../utils/notes";
import Link from "next/link";
import { BlogTitle } from "../../components/BlogTitle";
import { TagPill } from "../../components/TagPill";

function NotesByTag({ notes }) {
  const router = useRouter();
  const { tag } = router.query;

  if (!notes) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <div className="">Notes with Tag: </div> <TagPill tag={tag} />
      </div>
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
