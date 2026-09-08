import { posts } from "@/lib/site-data";

/**
 * Branded social posts. Shown as a clean three-column grid of square
 * posters, each shown complete (object-contain) so nothing is cropped.
 */
export function PostsRail() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
      {posts.map((p, i) => (
        <article
          key={`${p.image}-${i}`}
          className="lit-panel flex h-full flex-col overflow-hidden bg-card"
        >
          <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-black/60">
            <img
              src={p.image}
              alt={`${p.title}, ${p.location}`}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col p-4 sm:p-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.tag}</span>
            <h3 className="mt-2 text-sm font-bold sm:text-base">{p.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{p.location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
