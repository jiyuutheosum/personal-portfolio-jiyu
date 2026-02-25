import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export default function Section({
  children,
  id,
  className = "",
  title,
}: SectionProps) {
  return (
    <section id={id} className={`px-4 sm:px-8 lg:px-20 py-20 ${className}`}>
      {title && (
        <h2 className="text-black font-poppins text-[30px] font-semibold mb-12">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
