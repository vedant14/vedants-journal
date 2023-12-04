import Link from "next/link";
import menuData from "../data/menu.json";
import { useRouter } from "next/router";
export function Nav() {
  const router = useRouter();

  function containsNotes(str, slug) {
    return slug.includes(str); // Check if the slug contains the current path
  }

  return (
    <div className="sm:flex justify-between mb-12">
      <div
        className={
          router.pathname === "/"
            ? "underline ease-in text-gray-900"
            : "text-gray-400"
        }
      >
        <Link href="/" className="text-inherit">
          Vedant Lohbare
        </Link>
      </div>
      <div className="flex space-x-4 mt-4 sm:mt-0 lowercase">
        {menuData.map((menu, i) => (
          <div
            key={i}
            className={
              containsNotes(menu.slug, router.pathname)
                ? "underline ease-in text-gray-900"
                : "text-gray-400"
            }
          >
            <Link href={menu.slug} className="text-inherit">
              {menu.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
