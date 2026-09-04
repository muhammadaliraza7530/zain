import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Property Detail — Zain Real Estate, Sukkur" },
      {
        name: "description",
        content: "Individual property detail pages by Zain Real Estate, Sukkur, are coming soon.",
      },
      { property: "og:title", content: "Property Detail — Zain Real Estate" },
      { property: "og:description", content: "Property detail pages coming soon." },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  return (
    <>
      <PageHero
        eyebrow="Property"
        title="Coming Soon"
        intro="Detailed property pages with photos, pricing and location are being prepared."
        image={img.courtyard}
      />
      <CtaBand
        title="Ask about this property"
        body="WhatsApp 0313-5974923 and we will share full details right away."
      />
    </>
  );
}
