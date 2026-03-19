import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BubbleCursor from "@/components/ui/bubble-cursor";
import CustomCursor from "@/components/ui/custom-cursor";

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  const location = useLocation();

  const rootEl =
    typeof document !== "undefined" ? document.getElementById("root") : null;

  const isBeyondCode = location.pathname === "/beyond-code";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isBeyondCode && <BubbleCursor />}

        <CustomCursor wrapperElement={rootEl} />

        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}