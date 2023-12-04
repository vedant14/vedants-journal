// pages/index.js
import React from "react";
import { getNoteData } from "../../utils/notes";
import { BlogTitle } from "../../components/BlogTitle";
import { Divider } from "../../components/Divider";

export default function Notes({ notes }) {
  return (
    <div>
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
function formatDate(dateString) {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    undefined,
    options
  );
  return formattedDate;
}

export async function getStaticProps() {
  const notes = getNoteData();
  return {
    props: {
      notes,
    },
  };
}
