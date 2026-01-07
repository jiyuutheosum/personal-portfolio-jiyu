export default function Skills() {
  const skills = [
    { name: "HTML", dark: false },
    { name: "CSS", dark: false },
    { name: "JavaScript", dark: false },
    { name: "MySQL", dark: false },
    { name: "Pandas", dark: false },
    { name: "Typescript", dark: false },
    { name: "C++", dark: false },
    { name: "Github", dark: false },
    { name: "Firebase", dark: false },
    { name: "Figma", dark: false },
    { name: "Jupiter", dark: true },
    { name: "Canva", dark: true },
    { name: "Bootstrap", dark: false },
  ];

  return (
    <section
      id="skills"
      className="min-h-[400px] bg-portfolio-bg px-4 sm:px-8 lg:px-20 py-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-black font-poppins text-[30px] font-extrabold text-center mb-12">
          SKILLS
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`px-[30px] py-[6px] rounded-[20px] ${
                skill.dark ? "bg-black" : "bg-[#1E2929]"
              } hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <span className="text-white font-poppins text-[15px] font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
