import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OpenGraph image (dynamic)
 * -------------------------
 * Used by social platforms when sharing the site.
 * Customize the name/headline via environment variables:
 * - NEXT_PUBLIC_OG_NAME
 * - NEXT_PUBLIC_OG_HEADLINE
 */
export default function Image() {
  const name = process.env.NEXT_PUBLIC_OG_NAME || "SWANN";
  const headline = process.env.NEXT_PUBLIC_OG_HEADLINE || "Salesforce / IT Ops";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#070B1A",
          color: "white"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
            {name}
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>
            {headline}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 18, opacity: 0.7 }}>Portfolio</div>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 999,
              background: "rgba(34,211,238,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(34,211,238,1)",
              fontSize: 28,
              fontWeight: 800
            }}
          >
            S
          </div>
        </div>
      </div>
    ),
    size
  );
}
