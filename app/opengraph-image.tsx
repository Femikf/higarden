import { ImageResponse } from "next/og";
import { site } from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Premium Landscaping & Garden Design in Kerala`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "90px",
          background: "linear-gradient(135deg, #0F2E22 0%, #1B3B2F 60%, #24473A 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 40 40">
            <path
              d="M20 6c7 3 11 9 11 16 0 6.6-5.4 12-12 12S7 28.6 7 22c0-3 1.2-5.7 3.2-7.8C12.6 17 15 19.5 17 22.5 17.6 15.6 18.4 10 20 6Z"
              fill="#C9A961"
            />
          </svg>
          <span style={{ fontSize: 40, color: "#FAF7F0", fontWeight: 600 }}>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
            fontSize: 58,
            fontWeight: 200,
            color: "#FAF7F0",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          <span>We don&rsquo;t just plant gardens.</span>
          <span style={{ color: "#C9A961", fontWeight: 400 }}>We craft living spaces.</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 24, color: "rgba(250,247,240,0.7)" }}>
          Premium Landscaping &amp; Garden Design in Kerala
        </div>
      </div>
    ),
    { ...size }
  );
}
