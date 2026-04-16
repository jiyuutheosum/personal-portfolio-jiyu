import { Route, Routes } from "react-router-dom";

import Index from "@/features/home/pages/Index";
import NotFound from "@/components/layout/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}