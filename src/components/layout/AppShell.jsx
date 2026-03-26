import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function AppShell() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main className="page-content">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
