import Container from "./layout/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[500px] ghibli-bg px-4 sm:px-8 lg:px-20 pt-24 pb-0"
    >
      <Container className="ghibli-bg">
        <div className="bg-ghibli-surface/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-soft border border-ghibli-muted/20 max-w-2xl">
          <h2 className="text-ghibli-text font-poppins text-3xl md:text-4xl font-semibold mb-8">
            Let's get in Touch!
          </h2>
          <div className="text-ghibli-text/80 font-poppins text-lg md:text-xl leading-relaxed">
            <p className="mb-6">I'd love to hear from you! Feel free to reach out through any of these platforms:</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:baraocor.jalanie@gmail.com"
                className="inline-flex items-center gap-2 text-ghibli-accent hover:text-ghibli-highlight transition-colors duration-300 underline decoration-2 decoration-ghibli-accent/30 hover:decoration-ghibli-highlight"
              >
                <span className="w-8 h-8 rounded-full bg-ghibli-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 16" fill="currentColor">
                    <path d="M18.001 0H2.001C0.901 0 0.011 0.9 0.011 2L0.001 14C0.001 15.1 0.901 16 2.001 16H18.001C19.101 16 20.001 15.1 20.001 14V2C20.001 0.9 19.101 0 18.001 0ZM18.001 4L10.001 9L2.001 4V2L10.001 7L18.001 2V4Z"/>
                  </svg>
                </span>
                Email me
              </a>
              <a
                href="https://www.instagram.com/jiyuxcz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ghibli-accent hover:text-ghibli-highlight transition-colors duration-300 underline decoration-2 decoration-ghibli-accent/30 hover:decoration-ghibli-highlight"
              >
                <span className="w-8 h-8 rounded-full bg-ghibli-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11.029 0C12.154 0.003 12.725 0.009 13.218 0.023L13.412 0.03C13.636 0.038 13.857 0.0479999 14.124 0.0599999C15.188 0.11 15.914 0.278 16.551 0.525C17.211 0.779 17.767 1.123 18.323 1.678C18.831 2.17773 19.225 2.78247 19.476 3.45C19.723 4.087 19.891 4.813 19.941 5.878C19.953 6.144 19.963 6.365 19.971 6.59L19.977 6.784C19.992 7.276 19.998 7.847 20 8.972L20.001 9.718V11.028C20.003 11.7574 19.995 12.4868 19.978 13.216L19.972 13.41C19.964 13.635 19.954 13.856 19.942 14.122C19.892 15.187 19.722 15.912 19.476 16.55C19.225 17.2175 18.831 17.8223 18.323 18.322C17.823 18.8307 17.218 19.2242 16.551 19.475C15.914 19.722 15.188 19.89 14.124 19.94L13.412 19.97L13.218 19.976C12.725 19.99 12.154 19.997 11.029 19.999L10.283 20H8.974C8.244 20.0026 7.514 19.9949 6.785 19.977L6.591 19.971C6.353 19.962 6.116 19.9517 5.879 19.94C4.815 19.89 4.089 19.722 3.451 19.475C2.783 19.2241 2.179 18.8306 1.68 18.322C1.171 17.8224 0.777 17.2176 0.526 16.55C0.279 15.913 0.111 15.187 0.061 14.122L0.031 13.41L0.026 13.216C0.007 12.4868 -0.001 11.7574 0.001 11.028V8.972C-0.002 8.2426 0.005 7.5132 0.023 6.784L0.03 6.59C0.038 6.365 0.048 6.144 0.06 5.878C0.11 4.813 0.278 4.088 0.525 3.45C0.776 2.7822 1.171 2.17744 1.681 1.678C2.18 1.16955 2.784 0.776074 3.451 0.525C4.089 0.278 4.814 0.11 5.879 0.0599999C6.145 0.0479999 6.367 0.038 6.591 0.03L6.785 0.0239999C7.514 0.00623271 8.243 -0.0014347 8.973 0.000999928L11.029 0ZM10.001 5C8.674 5 7.403 5.52678 6.465 6.46447C5.527 7.40215 5.001 8.67392 5.001 10C5.001 11.3261 5.527 12.5979 6.465 13.5355C7.403 14.4732 8.674 15 10.001 15C11.327 15 12.598 14.4732 13.536 13.5355C14.474 12.5979 15.001 11.3261 15.001 10C15.001 8.67392 14.474 7.40215 13.536 6.46447C12.598 5.52678 11.327 5 10.001 5ZM10.001 7C10.395 6.99993 10.785 7.07747 11.149 7.22817C11.513 7.37887 11.843 7.5998 12.122 7.87833C12.401 8.15686 12.622 8.48754 12.773 8.85149C12.923 9.21544 13.001 9.60553 13.001 9.9995C13.001 10.3935 12.924 10.7836 12.773 11.1476C12.622 11.5116 12.401 11.8423 12.123 12.121C11.844 12.3996 11.514 12.6206 11.15 12.7714C10.786 12.9223 10.396 12.9999 10.002 13C9.206 13 8.443 12.6839 7.88 12.1213C7.318 11.5587 7.002 10.7956 7.002 10C7.002 9.20435 7.318 8.44129 7.88 7.87868C8.443 7.31607 9.206 7 10.002 7ZM15.252 3.5C14.92 3.5 14.602 3.6317 14.368 3.86612C14.133 4.10054 14.002 4.41848 14.002 4.75C14.002 5.08152 14.133 5.39946 14.368 5.63388C14.602 5.8683 14.92 6 15.252 6C15.583 6 15.901 5.8683 16.135 5.63388C16.37 5.39946 16.502 5.08152 16.502 4.75C16.502 4.41848 16.37 4.10054 16.135 3.86612C15.901 3.6317 15.583 3.5 15.252 3.5Z"/>
                  </svg>
                </span>
                Instagram
              </a>
              <a
                href="https://github.com/jiyuutheosum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ghibli-accent hover:text-ghibli-highlight transition-colors duration-300 underline decoration-2 decoration-ghibli-accent/30 hover:decoration-ghibli-highlight"
              >
                <span className="w-8 h-8 rounded-full bg-ghibli-accent/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0.242493C8.68678 0.242493 7.38642 0.50115 6.17317 1.0037C4.95991 1.50624 3.85752 2.24284 2.92893 3.17142C1.05357 5.04679 0 7.59033 0 10.2425C0 14.6625 2.87 18.4125 6.84 19.7425C7.34 19.8225 7.5 19.5125 7.5 19.2425V17.5525C4.73 18.1525 4.14 16.2125 4.14 16.2125C3.68 15.0525 3.03 14.7425 3.03 14.7425C2.12 14.1225 3.1 14.1425 3.1 14.1425C4.1 14.2125 4.63 15.1725 4.63 15.1725C5.5 16.6925 6.97 16.2425 7.54 16.0025C7.63 15.3525 7.89 14.9125 8.17 14.6625C5.95 14.4125 3.62 13.5525 3.62 9.74249C3.62 8.63249 4 7.74249 4.65 7.03249C4.55 6.78249 4.2 5.74249 4.75 4.39249C4.75 4.39249 5.59 4.12249 7.5 5.41249C8.29 5.19249 9.15 5.08249 10 5.08249C10.85 5.08249 11.71 5.19249 12.5 5.41249C14.41 4.12249 15.25 4.39249 15.25 4.39249C15.8 5.74249 15.45 6.78249 15.35 7.03249C16 7.74249 16.38 8.63249 16.38 9.74249C16.38 13.5625 14.04 14.4025 11.81 14.6525C12.17 14.9625 12.5 15.5725 12.5 16.5025V19.2425C12.5 19.5125 12.66 19.8325 13.17 19.7425C17.14 18.4025 20 14.6625 20 10.2425C20 8.92927 19.7413 7.62891 19.2388 6.41566C18.7362 5.2024 17.9997 4.10001 17.0711 3.17142C16.1425 2.24284 15.0401 1.50624 13.8268 1.0037C12.6136 0.50115 11.3132 0.242493 10 0.242493Z"/>
                  </svg>
                </span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
