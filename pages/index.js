// pages/index.js
import Link from "next/link";
import React from "react";
import { Divider } from "../components/Divider";
import { SEO } from "../components/SEO";
import Image from "next/image";
import { Container } from "../components/Container";
import { Photos } from "../components/Photos";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../components/SocialIcons";

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
            <span className="font-bold">amazing</span> product team at Razorpay
            Capital.
            <br /> 💭 Most of my time is spent on day-dreaming about scaling my
            many <Link href="/side-projects">side-projects</Link>.
            <br />
            📙 I love to read - These days I prefer reading fiction.
            <br />
            🖌️ You may sometimes find me paint or{" "}
            <Link href="/notes"> write stuff</Link> online
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container>
        <div>
          <Divider text="among other things" />
          <div>
            <div className="space-y-4">
              <p className="text-xl "> Some things I am proud of </p>
              <ul role="list" className="text-lg space-y-4 list-none dashed">
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
              <ul role="list" className="text-lg space-y-4 list-none dashed">
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
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}
