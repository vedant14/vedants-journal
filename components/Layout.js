import { Nav } from "./Nav";

export function Layout({ children }) {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-12 py-16">
        <div className="max-w-3xl mx-auto">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
}
