import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 transition-all duration-300 ${
        isScrolled ? "glassmorphism shadow-lg" : "bg-portfolio-bg"
      }`}>
        <div className="flex justify-between items-center h-[100px] sm:h-[138px]">
          <h1
            className="text-[#1E2929] font-poppins text-3xl sm:text-[50px] font-bold cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            jiy.ui
          </h1>
          <nav className="flex gap-6 sm:gap-[45px] items-center">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#1E2929] font-poppins text-sm sm:text-[15px] font-normal hover:font-semibold hover:scale-110 transition-all duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E2929] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
