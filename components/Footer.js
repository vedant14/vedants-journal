import { useRouter } from "next/router";
import Link from "next/link";
import { Divider } from "./Divider";
import Image from "next/image";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function MainFooter() {
  const router = useRouter();
  if (router.pathname == "/notes/[slug]") {
    return <BlogFooter />;
  } else {
    return <Footer />;
  }
}
function BlogFooter() {
  return (
    <FooterLayout text="la fin :)">
      <SocialLinks />
    </FooterLayout>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-12">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}

function FooterLayout({ text, children }) {
  return (
    <Container>
      <div className="mt-16 border-1">
        <Divider text={text} />
        <div>{children}</div>
      </div>
    </Container>
  );
}
function Socials() {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <a href="https://twitter.com/VedantLohbare">
          <Image src="/twitter.svg" width={30} height={30} alt="Linkedin" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/vedant-lohbare/">
          <Image src="/linkedin.svg" width={30} height={30} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
}
