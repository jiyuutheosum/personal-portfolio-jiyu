import { Route, Routes } from "react-router-dom";

import Index from "@/features/home/pages/Index";
import About from "@/features/about/pages/About";
import Skills from "@/features/skills/pages/Skills";
import Portfolio from "@/features/portfolio/pages/Portfolio";
import BeyondCode from "@/features/beyond-code/pages/BeyondCode"; // ✅ add this
import Contact from "@/features/contact/pages/Contact";
import NotFound from "@/components/layout/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/beyond-code" element={<BeyondCode />} /> {/* ✅ add this */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}