import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  img: string;
  alt: string;
  href: string;
};

// PUBLIC_INTERFACE
export function ServiceCard({ title, description, img, alt, href }: Props) {
  /** A reusable service card with image, title, description, and CTA link */
  return (
    <article className="card" style={{ padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
        <Image
          src={img}
          alt={alt}
          width={64}
          height={64}
          style={{ width: 64, height: 64 }}
        />
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      <p style={{ color: "var(--color-muted)" }}>{description}</p>
      <div>
        <Link className="link" href={href} aria-label={`Explore ${title}`}>
          Explore {title} →
        </Link>
      </div>
    </article>
  );
}
