import { useState } from "react";
import { developmentProjects, designProjects } from "@/content/portfolio";
import Container from "./layout/Container";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"development" | "design">(
    "development",
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects =
    activeTab === "development" ? developmentProjects : designProjects;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 2 >= projects.length ? 0 : prev + 2));
  };

  return (
    <section
      id="portfolio"
      className="min-h-[750px] ghibli-bg px-4 sm:px-8 lg:px-20 py-24"
    >
      <Container>
        <h2 className="text-ghibli-text font-poppins text-3xl font-semibold mb-16 text-center">
          Portfolio
        </h2>

        <div className="relative w-full max-w-[700px] mx-auto mb-16">
          <div className="h-[60px] rounded-full bg-ghibli-surface flex items-center relative px-2 shadow-soft border border-ghibli-muted/30">
            <div
              className={`absolute h-[48px] w-[320px] rounded-full bg-ghibli-accent transition-all duration-500 ease-in-out ${
                activeTab === "development" ? "left-2" : "left-[336px]"
              }`}
            ></div>

            <button
              onClick={() => setActiveTab("development")}
              className={`relative z-10 w-[320px] h-[48px] flex items-center justify-center font-poppins text-lg transition-colors duration-300 ${
                activeTab === "development"
                  ? "text-white font-medium"
                  : "text-ghibli-text font-medium"
              }`}
            >
              Development
            </button>

            <button
              onClick={() => setActiveTab("design")}
              className={`relative z-10 w-[320px] h-[48px] flex items-center justify-center font-poppins text-lg transition-colors duration-300 ${
                activeTab === "design"
                  ? "text-white font-medium"
                  : "text-ghibli-text font-medium"
              }`}
            >
              Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects
            .slice(currentSlide, currentSlide + 2)
            .map((project, index) => (
              <div
                key={index}
                className="bg-ghibli-surface rounded-2xl overflow-hidden shadow-soft border border-ghibli-muted/20 transform transition-all duration-500 hover:shadow-sunlight hover:-translate-y-1"
              >
                <div className="h-[200px] bg-ghibli-muted/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-ghibli-text font-poppins text-lg font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-ghibli-text/70 font-poppins text-sm font-normal mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-ghibli-accent/10 text-ghibli-accent font-poppins text-xs font-medium"
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
          <div className="flex gap-3">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === 0 
                    ? "bg-ghibli-accent w-6" 
                    : "bg-ghibli-muted/50"
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-ghibli-accent flex items-center justify-center hover:bg-ghibli-highlight hover:shadow-soft-lg transition-all duration-300 group ml-4"
            aria-label="Next projects"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M20.7071 0.707107C21.0976 0.316583 21.0976 -0.316583 20.7071 -0.707107L14.3431 -7.07107C13.9526 -7.46159 13.3195 -7.46159 12.9289 -7.07107C12.5384 -6.68054 12.5384 -6.04738 12.9289 -5.65685L18.5858 0L12.9289 5.65685C12.5384 6.04738 12.5384 6.68054 12.9289 7.07107C13.3195 7.46159 13.9526 7.46159 14.3431 7.07107L20.7071 0.707107ZM0 0V1H20V0V-1H0V0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
