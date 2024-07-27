// pages/index.js
import Link from "next/link";
import React from "react";
import { Divider } from "../components/Divider";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";
import { Photos } from "../components/Photos";
import { SocialLinks } from "../components/SocialLinks";

export const metadata = {
  title: "Vedant Lohbare",
  description: "This is my personal site",
};

export default function Home() {
  return (
    <>
      <SEO />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight leading-[50px] text-zinc-800 sm:text-5xl">
            <span className="line-through">cyclist,</span> product manager &
            part-time side-project ship-er
          </h1>
          <p className="mt-8 text-base font-light text-zinc-500 leading-[30px]">
            Hey, I’m Vedant Lohbare.
            <br /> 💻 I currently work with the{" "}
            <span className="font-bold">amazing</span> product team at RazorpayX
            Capital.
            <br /> 💭 Most of my time, I spend day-dreaming about scaling my
            many <Link href="/side-projects">side-projects</Link>.
            <br />
            📙 I love to read - These days I prefer reading fiction.
            <br />
            🖌️ You may sometimes find me paint or{" "}
            <Link href="/notes"> write stuff</Link> online
          </p>
          <SocialLinks />
        </div>
      </Container>
      <Photos />
      <Container>
        <div>
          <Divider text="among other things" />
          <div>
            <div className="space-y-4">
              <ul
                role="list"
                className="text-gray-500 space-y-4 list-none dashed"
              >
                <li>
                  My <Link href="/side-projects">side-projects</Link>
                </li>
                <li>
                  My <Link href="/tags/work">work</Link>
                </li>
                <li>
                  Volunteered, taught, raised funds, recruited, sponsored and
                  pretty-much did everything I could for under-privileged
                  children at{" "}
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
              <ul
                role="list"
                className="text-gray-500 space-y-4 list-none dashed"
              >
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
      </Container>
    </>
  );
}
