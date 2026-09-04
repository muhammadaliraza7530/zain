import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zain Real Estate — Property Consultant in Sukkur" },
      {
        name: "description",
        content:
          "Zain Real Estate is a property consultancy and marketing firm in Sukkur led by Hizb Ullah Abro. Full about page coming soon.",
      },
      { property: "og:title", content: "About Zain Real Estate" },
      { property: "og:description", content: "Trusted property consultant and marketing firm in Sukkur." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Coming Soon"
        intro="Our full company story is being prepared. Meanwhile, you can read a short introduction on the home page."
        image={img.luxuryHouse}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">This page is on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are adding our team, milestones and client stories here shortly.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need property advice right now?"
        body="Call or WhatsApp Hizb Ullah Abro at 0313-5974923 for immediate assistance."
      />
    </>
  );
}
