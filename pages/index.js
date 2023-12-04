// pages/index.js
import Link from "next/link";
import React from "react";
import { Divider } from "../components/Divider";

export default function Home() {
  return (
    <div>
      <Divider text="welcome" />
      <div className="text-lg space-y-4">
        <p className="text-xl">Hey, my name is Vedant :)</p>
        <p>
          👋 I’m a <span className="line-through">cyclist,</span> product
          manager & a part-time coder.
        </p>
        <p>
          💻 I currently work with the{" "}
          <span className="font-bold">amazing</span> product team at Razorpay
          Capital.
        </p>
        <p>
          💭 Most of my time is spent on day-dreaming about scaling my many{" "}
          <Link href="/side-projects">side-projects</Link>.
        </p>
        <p>📙 I love to read - These days I prefer reading fiction.</p>
        <p>
          🖌️ You may sometimes find me paint or{" "}
          <Link href="/notes"> write stuff</Link> online
        </p>
      </div>
      <Divider text="among other things" />
      <div>
        <div className="space-y-4">
          <p className="text-xl "> Some things I am proud of </p>
          <ul role="list" className="text-lg space-y-4 list-none dashed">
            <li>
              My <Link href="/side-projects">side-projects</Link>
            </li>
            <li>
              My <Link href="/proof-of-work">work</Link>
            </li>
            <li>
              Volunteered, taught, raised funds, recruited, sponsored and
              pretty-much did everything I could for under-privileged children
              at{" "}
              <a href="https://makeadiff.in/" target="_blank">
                {" "}
                Make a Difference{" "}
              </a>{" "}
              for 4 years.
            </li>
          </ul>
        </div>
      </div>
      <Divider text="quick links " />
      <div>
        <div className="sec-text">
          <ul role="list" className="text-lg space-y-4 list-none dashed">
            <li>
              Notes on <Link href="/tags/sprints"> my personal sprints</Link>{" "}
            </li>
            <li>
              Notes on <Link href="/tags/writing">writings</Link>
            </li>
            <li>
              Notes on <Link href="/tags/work">work</Link>
            </li>
            <li>
              Notes on <Link href="/tags/side-projects">side-projects</Link>
            </li>
            <li>
              <Link href="/tags/rants">Rants</Link> are here
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
