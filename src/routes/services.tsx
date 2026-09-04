import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — New Projects, Sale, Purchase & Rent | Zain Real Estate" },
      {
        name: "description",
        content:
          "New project bookings, property sale and purchase, rentals and property marketing in Sukkur by Zain Real Estate. Detailed pages coming soon.",
      },
      { property: "og:title", content: "Services — Zain Real Estate" },
      { property: "og:description", content: "Booking, sale, purchase, rent and marketing of property in Sukkur." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Coming Soon"
        intro="Detailed service pages are being prepared. A summary of everything we do is on the home page."
        image={img.brickFront}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Service details are on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              New project bookings, sale and purchase, rentals and property marketing — full pages coming soon.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need help with a property today?"
        body="Call 0313-5974923 and we will guide you to the right option in Sukkur."
      />
    </>
  );
}
