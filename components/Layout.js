import { MainFooter } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <div className="relative mb-20">
      <Header />
      {children}
      <MainFooter />
    </div>
  );
}
