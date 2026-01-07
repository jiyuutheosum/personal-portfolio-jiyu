import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"development" | "design">(
    "development",
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const developmentProjects = [
    {
      title: "Moongle Buddy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tech: ["Firebase", "React"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    },
    {
      title: "QuickMemo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tech: ["HTML", "CSS"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    },
  ];

  const designProjects = [
    {
      title: "Design Project 1",
      description:
        "Creative design work showcasing modern UI/UX principles with focus on user experience and visual hierarchy.",
      tech: ["Figma", "Adobe XD"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    },
    {
      title: "Design Project 2",
      description:
        "Brand identity and visual design project with comprehensive style guide and component library.",
      tech: ["Illustrator", "Photoshop"],
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=400&fit=crop",
    },
  ];

  const projects =
    activeTab === "development" ? developmentProjects : designProjects;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 2 >= projects.length ? 0 : prev + 2));
  };

  return (
    <section
      id="portfolio"
      className="min-h-[750px] bg-portfolio-bg px-4 sm:px-8 lg:px-20 py-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-black font-poppins text-[30px] font-semibold mb-12">
          Portfolio
        </h2>

        <div className="relative w-full max-w-[845px] mx-auto mb-12">
          <div className="h-[65px] rounded-[25px] bg-white flex items-center justify-center relative">
            <div
              className={`absolute h-[45px] w-[390px] rounded-[20px] bg-[#344647] transition-all duration-500 ease-in-out ${
                activeTab === "development" ? "left-[20px]" : "left-[435px]"
              }`}
            ></div>
            <button
              onClick={() => setActiveTab("development")}
              className={`relative z-10 px-12[8rem] py-2 font-poppins text-[25px] transition-colors duration-300 ${
                activeTab === "development"
                  ? "text-white font-normal"
                  : "text-[#344647] font-normal"
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`relative z-10 px-12[12rem] py-2 font-poppins text-[25px] transition-colors duration-300 ${
                activeTab === "design"
                  ? "text-white font-normal"
                  : "text-[#344647] font-normal"
              }`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {projects
            .slice(currentSlide, currentSlide + 2)
            .map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] overflow-hidden shadow-lg transform transition-all duration-500 opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="h-[188px] bg-[#D9D9D9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-black font-inter text-[15px] font-extrabold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black font-inter text-[12px] font-normal mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-[9px] py-[4px] rounded-[5px] bg-[#1E2929] text-white font-inter text-[10px] font-normal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-[15px] h-[15px] rounded-full transition-colors duration-300 ${
                  index === 0 ? "bg-[#1E2929]" : "bg-[#F5F5F5]"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-[50px] h-[25px] rounded-[20px] bg-black/85 flex items-center justify-center hover:scale-110 hover:bg-black transition-all duration-300 group ml-4"
            aria-label="Next projects"
          >
            <svg
              width="20"
              height="1"
              viewBox="0 0 20 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M20.7071 0.707107C21.0976 0.316583 21.0976 -0.316583 20.7071 -0.707107L14.3431 -7.07107C13.9526 -7.46159 13.3195 -7.46159 12.9289 -7.07107C12.5384 -6.68054 12.5384 -6.04738 12.9289 -5.65685L18.5858 0L12.9289 5.65685C12.5384 6.04738 12.5384 6.68054 12.9289 7.07107C13.3195 7.46159 13.9526 7.46159 14.3431 7.07107L20.7071 0.707107ZM0 0V1H20V0V-1H0V0Z"
                fill="#F5F5F5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
