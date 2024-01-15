import { useRouter } from "next/router";
import { Divider } from "./Divider";
import Image from "next/image";

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
    <FooterLayout text="thanks for reading :) ❤️">
      <Socials />
    </FooterLayout>
  );
}
function Footer() {
  return (
    <FooterLayout text="want to know more about me?">
      <Socials />
    </FooterLayout>
  );
}

function FooterLayout({ text, children }) {
  return (
    <div className="mt-16 border-1">
      <Divider text={text} />
      <div>{children}</div>
    </div>
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
