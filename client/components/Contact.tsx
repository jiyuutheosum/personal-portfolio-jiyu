export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[500px] bg-portfolio-bg px-4 sm:px-8 lg:px-20 pt-20 pb-0"
    >
      <div className="max-w-[1280px] mx-auto bg-portfolio-bg rounded-b-[20px] pb-20">
        <h2 className="text-[#1E2929] font-poppins text-[40px] sm:text-[50px] font-extrabold mb-8">
          Let's get in Touch!
        </h2>
        <div className="text-black font-poppins text-[20px] sm:text-[25px] font-medium leading-relaxed max-w-[407px]">
          <a
            href="mailto:jiyuu@example.com"
            className="underline hover:text-portfolio-darker hover:scale-105 inline-block transition-all duration-300"
          >
            Email me
          </a>{" "}
          for a collaboration or a casual chat, slide into my{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-portfolio-darker hover:scale-105 inline-block transition-all duration-300"
          >
            Instagram
          </a>{" "}
          for DMs, or let's connect on{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-portfolio-darker hover:scale-105 inline-block transition-all duration-300"
          >
            LinkedIn
          </a>
          .
        </div>
      </div>
    </section>
  );
}
