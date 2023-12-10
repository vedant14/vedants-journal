import { Dividerwithbutton } from "../components/Divider";
import { SEO } from "../components/SEO";

export default function POW() {
  return (
    <div>
      <SEO title="Proof-of-work" />
      <Dividerwithbutton
        text="last updated Dec,2023"
        buttonText="read updates on work"
        url="tags/work"
      />
      <ul className="flex justify-between">
        <li>Homzhub</li>
        <li>Razorpay</li>
        <li>zero-to-one</li>
        <li>one-to-ten</li>
        <li>ten-to-infinity</li>
      </ul>
    </div>
  );
}
