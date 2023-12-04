import { Dividerwithbutton } from "../components/Divider";
import { SEO } from "../components/SEO";

export default function POW() {
  return (
    <div>
      <SEO title="Proof-of-work" />
      <Dividerwithbutton
        text="Proof of work"
        buttonText="read updates on work"
        url="tags/work"
      />
      <p className="">Page is WIP</p>
    </div>
  );
}
