import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { oceanPhotos } from "@/content/beyond-code";

export default function BeyondCode() {
  return (
    <Section
      id="beyond-code"
      className="bg-[var(--color-cream,#F7F4ED)] pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <Container>
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-[var(--color-charcoal,#3A3A3A)] md:text-5xl">
              A quiet space for the moments that
              <span className="block text-[var(--color-sage,#A8C3A0)]">
                inspire me beyond code.
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-muted,#7A7A7A)] md:text-lg">
              Outside of building and designing, I find comfort in the sea, in
              still moments, and in the small things that make life feel soft
              and meaningful. This page holds a few of those quiet memories.
            </p>
          </div>

          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {oceanPhotos.map((photo) => (
              <article
                key={photo.title}
                className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h2 className="text-lg font-medium text-[var(--color-charcoal,#3A3A3A)]">
                    {photo.title}
                  </h2>
                  <p className="text-sm leading-7 text-[var(--color-muted,#7A7A7A)]">
                    {photo.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}