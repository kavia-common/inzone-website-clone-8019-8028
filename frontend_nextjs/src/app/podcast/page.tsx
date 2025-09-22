import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description: "Listen to insights on UAE business setup and growth.",
  alternates: { canonical: "/podcast" },
};

const episodes = [
  { title: "Starting Up in a Free Zone", duration: "18:21" },
  { title: "Mainland vs. Free Zone", duration: "21:54" },
  { title: "Banking in the UAE", duration: "16:09" },
];

export default function PodcastPage() {
  return (
    <section className="section">
      <h1>Podcast</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {episodes.map((e, idx) => (
          <article key={idx} className="card" style={{ padding: "1rem" }}>
            <h3 style={{ marginTop: 0 }}>{e.title}</h3>
            <p style={{ color: "var(--color-muted)" }}>Duration: {e.duration}</p>
            <audio controls preload="none" style={{ width: "100%" }}>
              <source src="/assets/playerror.png" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </article>
        ))}
      </div>
    </section>
  );
}
