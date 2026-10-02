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
          <svg width="60" height="60" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="20" fill="#5DB334" />
            <path
              d="M20 7c6 2.5 9.5 7.5 9.5 13.5 0 5.5-4.5 10-10 10s-10-4.5-10-10c0-2.5 1-4.8 2.7-6.5C13.8 16.5 15.8 18.5 17.5 21c0.5-5.8 1.2-10.5 2.5-14Z"
              fill="#FFFFFF"
            />
          </svg>
          <span style={{ fontSize: 44, color: "#FAF7F0", fontWeight: 700 }}>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
            fontSize: 56,
            fontWeight: 300,
            color: "#FAF7F0",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          <span>Stay green and be seen.</span>
          <span style={{ color: "#5DB334", fontWeight: 600 }}>We craft living Kerala gardens.</span>
        </div>
        <div style={{ marginTop: 36, fontSize: 24, color: "rgba(250,247,240,0.8)" }}>
          Kerala-Specialist Landscaping &amp; Nursery Studio &bull; Palakkad
        </div>
      </div>
    ),
    { ...size }
  );
}
