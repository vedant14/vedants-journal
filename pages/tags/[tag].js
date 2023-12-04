// pages/notes/[tag].js
import React from "react";
import { useRouter } from "next/router";
import { getNoteData } from "../../utils/notes";
import { BlogTitle } from "../../components/BlogTitle";
import { Dividerwithbutton } from "../../components/Divider";

function NotesByTag({ notes }) {
  const router = useRouter();
  const { tag } = router.query;
  console.log(tag);
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
