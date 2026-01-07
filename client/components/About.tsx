import { useState } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://api.builder.io/api/v1/image/assets/TEMP/3d67d85e28d6ee5192c83e348d8b58db16cfecf6?width=700",
    "https://api.builder.io/api/v1/image/assets/TEMP/82a8a7a280caa4a83611b1a0266604f85ac032e5?width=700",
    "https://api.builder.io/api/v1/image/assets/TEMP/32f2c647a59e3222adb398092cc9e51ed66ebc7b?width=700",
  ];

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-portfolio-bg px-4 sm:px-8 lg:px-20 py-20"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[#1E2929] font-poppins text-[30px] font-extrabold text-center mb-12">
          ABOUT
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="relative w-full lg:w-[400px] h-[350px] flex-shrink-0">
            <div className="relative w-[350px] h-[350px] mx-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`About ${index + 1}`}
                  className={`absolute w-full h-full rounded-[20px] border border-black object-cover transition-all duration-500 ${
                    index === currentImage
                      ? "opacity-100 scale-100 z-10"
                      : index ===
                          (currentImage - 1 + images.length) % images.length
                        ? "opacity-50 scale-95 -translate-x-6 translate-y-0 z-0"
                        : "opacity-0 scale-90"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNextImage}
              className="absolute -bottom-12 right-1 -translate-x-1/2 w-[50px] h-[25px] rounded-[20px] bg-black/85 flex items-center justify-center hover:scale-110 hover:bg-black transition-all duration-300 group"
              aria-label="Next image"
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
          <div className="flex-1 mt-16 lg:mt-0">
            <p className="text-portfolio-darker font-poppins text-lg sm:text-[20px] font-light leading-relaxed">
              Hi I'm Jalanie M. Baraocor, a 4th-year BSIT student at USTP-CDO
              Campus with a passion for creating accessible, user-centered
              digital experiences, while continuously learning and growing as a
              future full-stack developer.
              <br />
              <br />
              With a strong focus on UI/UX design, I aim to craft interfaces
              that are both functional and visually engaging. I am dedicated to
              developing user-centric solutions that enhance usability and
              accessibility, combining aesthetic appeal with strategic
              functionality to deliver intuitive and effective digital
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
