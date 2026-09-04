import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Properties in Sukkur — Zain Real Estate" },
      {
        name: "description",
        content:
          "Plots, houses, flats, shops and commercial property listings in Sukkur by Zain Real Estate. Listings page coming soon.",
      },
      { property: "og:title", content: "Properties — Zain Real Estate" },
      { property: "og:description", content: "Property listings across Sukkur, coming soon." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Coming Soon"
        intro="Our live listings of plots, houses, flats and shops in Sukkur are being prepared."
        image={img.spanishVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Listings are being uploaded</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Until then, tell us what you are looking for and we will send matching options directly.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us your requirement"
        body="Area, property type and budget — we will shortlist verified options in Sukkur."
      />
    </>
  );
}
