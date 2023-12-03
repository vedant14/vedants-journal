import Link from "next/link";
import menuData from "../data/menu.json";
import { useRouter } from "next/router";
export function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <Nav />
        {children}
      </div>
    </div>
  );
}

function Nav() {
  const router = useRouter();

  function containsNotes(str, slug) {
    return slug.includes(str); // Check if the slug contains the current path
  }

  return (
    <div className="flex justify-between mb-12 lowercase">
      <div className={router.pathname === "/" ? "underline ease-in" : ""}>
        <Link href="/">Vedant Lohbare</Link>
      </div>
      <div className="flex space-x-2">
        {menuData.map((menu, i) => (
          <div
            key={i}
            className={
              containsNotes(menu.slug, router.pathname)
                ? "underline ease-in"
                : ""
            }
          >
            <Link href={menu.slug}>{menu.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
