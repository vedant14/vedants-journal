import { useRouter } from "next/router";

export function MainFooter() {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname == "/notes/[slug]") {
    return <BlogFooter />;
  } else {
    return <Footer />;
  }
}
function BlogFooter() {
  return (
    <div>
      <div>Blog footer</div>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <div>Vedant</div>
    </div>
  );
}
