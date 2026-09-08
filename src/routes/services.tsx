import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { img, process, services, site } from "@/lib/site-data";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — New Projects, Sale, Purchase & Rent | Zain Real Estate" },
      {
        name: "description",
        content:
          "New project bookings, property sale and purchase, rentals and property marketing in Sukkur by Zain Real Estate.",
      },
      { property: "og:title", content: "Services — Zain Real Estate" },
      { property: "og:description", content: "Booking, sale, purchase, rent and marketing of property in Sukkur." },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails: Record<string, string[]> = {
  "new-projects": [
    "Launch-rate booking in upcoming housing societies",
    "Easy instalment plans explained clearly",
    "Booking-to-registry documentation support",
  ],
  "sale-purchase": [
    "Verified plots, houses, flats and shops",
    "Fair market price guidance for buyers and sellers",
    "Agreement, transfer and registry handled end to end",
  ],
  rent: [
    "Houses, offices and shops in prime locations",
    "Options matched to your budget and area",
    "Transparent rental agreements for both sides",
  ],
  marketing: [
    "Professional marketing to reach genuine buyers",
    "Honest assessment of your property's market value",
    "Investment consultation for better returns",
  ],
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything Property, Under One Roof"
        intro="New project bookings, sale, purchase, rent and property marketing across Sukkur — handled with honesty and full documentation."
        image={img.brickFront}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-5 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-3xl border border-border object-cover"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.body}</p>
                  <ul className="mt-6 space-y-3">
                    {(serviceDetails[s.slug] ?? []).map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Ask about this service
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">How it works</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">A simple, transparent process</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-background/60 p-7">
                  <p className="text-3xl font-extrabold text-primary/70">{p.step}</p>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body={`Call ${site.phone} and describe your situation — we will point you in the right direction, free of charge.`}
      />
    </>
  );
}
