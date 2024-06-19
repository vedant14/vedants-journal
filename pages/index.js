// pages/index.js
import Link from "next/link";
import React from "react";
import { Divider } from "../components/Divider";
import { SEO } from "../components/SEO";
import { Container } from "../components/Container";
import { Photos } from "../components/Photos";
import { socialLinks } from "../components/SocialIcons";

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
          <h1 className="text-4xl font-bold tracking-tight leading-[50px] text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className="line-through">cyclist,</span> product manager &
            part-time side-project ship-er
          </h1>
          <p className="mt-8 text-base font-light text-zinc-500 leading-[30px]">
            I’m Vedant.
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
          <div className="mt-6 flex gap-6">
            {socialLinks.map((socialLink) => (
              <SocialLink
                key={socialLink.name}
                icon={socialLink.icon}
                href={socialLink.link}
                aria-label={socialLink.name}
              />
            ))}
          </div>
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
                {" "}
                <li>
                  Notes on{" "}
                  <Link href="/tags/sprints"> my personal sprints</Link>{" "}
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
      </Container>
    </>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props} target="_blank">
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
