import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zain Real Estate — Call 0313-5974923, Sukkur" },
      {
        name: "description",
        content:
          "Contact Hizb Ullah Abro at Zain Real Estate, B-52 Delhi Muslim Society near Sukkur IBA University. Phone and WhatsApp 0313-5974923.",
      },
      { property: "og:title", content: "Contact Zain Real Estate" },
      { property: "og:description", content: "Call or WhatsApp 0313-5974923 to discuss property in Sukkur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Coming Soon"
        intro="Our full contact page is being prepared. Contact details are available on the home page and in the footer."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Enquiry form coming soon</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              For now, call or WhatsApp Hizb Ullah Abro at 0313-5974923.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's find your dream property today"
        body="B-52, Delhi Muslim Society, Near Sukkur IBA University, Sukkur."
      />
    </>
  );
}
