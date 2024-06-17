import { MainFooter } from "./Footer";
import { Nav } from "./Nav";

export function Layout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="border-r border-l mx-auto max-w-5xl bg-white border-zinc-100 p-6 dark:border-zinc-700/40">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:py-12 py-16">
          <div className="max-w-3xl mx-auto">
            <Nav />
            {children}
            <MainFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
