import Image from "next/image";

// PUBLIC_INTERFACE
export function ClientsBar() {
  /** Displays a row of client or partner logos */
  const logos = [
    { src: "/assets/client-1.jpg", alt: "Client 1 logo" },
    { src: "/assets/client-2.jpg", alt: "Client 2 logo" },
    { src: "/assets/client-4.jpg", alt: "Client 4 logo" },
    { src: "/assets/client-5.jpg", alt: "Client 5 logo" },
    { src: "/assets/client-6.jpg", alt: "Client 6 logo" },
    { src: "/assets/client-7.jpg", alt: "Client 7 logo" },
    { src: "/assets/client-8.jpg", alt: "Client 8 logo" },
  ];

  return (
    <div
      className="card"
      style={{
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
        alignItems: "center",
      }}
      aria-label="Trusted by leading partners"
      role="region"
    >
      {logos.map((l, i) => (
        <div key={i} style={{ textAlign: "center", opacity: .85 }}>
          <Image
            src={l.src}
            alt={l.alt}
            width={160}
            height={64}
            style={{ width: "140px", height: "auto", objectFit: "contain", filter: "grayscale(1)" }}
          />
        </div>
      ))}
    </div>
  );
}
