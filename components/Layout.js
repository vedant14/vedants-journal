import { MainFooter } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 bg-gray-50">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative mb-20">
        {/* <Nav /> */}
        <Header />
        {children}
        {/* <MainFooter /> */}
      </div>
    </>
  );
}
