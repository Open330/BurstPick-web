import { ImageResponse } from "next/og.js";
import { writeFileSync, readFileSync } from "fs";

const logo = readFileSync("public/logo.png");
const logoBase64 = `data:image/png;base64,${logo.toString("base64")}`;

const image = new ImageResponse(
  {
    type: "div",
    props: {
      style: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#0a0a14",
        color: "#f0f0f5",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
        alignItems: "center",
        justifyContent: "center",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(79,125,242,0.45), transparent 45%), radial-gradient(circle at 80% 75%, rgba(123,79,242,0.4), transparent 45%), linear-gradient(140deg, rgba(255,213,79,0.12), rgba(255,179,0,0.02))",
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              position: "relative",
              display: "flex",
              width: "1040px",
              height: "440px",
              borderRadius: "36px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(18,18,30,0.85)",
              padding: "52px",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            children: [
              {
                type: "div",
                props: {
                  style: { display: "flex", alignItems: "center", gap: "24px" },
                  children: [
                    {
                      type: "img",
                      props: {
                        src: logoBase64,
                        width: 88,
                        height: 88,
                        style: { borderRadius: "20px" },
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", flexDirection: "column", gap: "8px" },
                        children: [
                          {
                            type: "div",
                            props: {
                              style: { fontSize: "72px", fontWeight: 800, letterSpacing: "-0.04em" },
                              children: "BurstPick",
                            },
                          },
                          {
                            type: "div",
                            props: {
                              style: { fontSize: "28px", color: "#a0a0b0", letterSpacing: "-0.01em" },
                              children: "AI-powered burst photo culling for photographers",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  },
                  children: [
                    {
                      type: "div",
                      props: {
                        style: { display: "flex", gap: "10px" },
                        children: [
                          "20+ ML model scoring",
                          "Intelligent clustering",
                          "Local-first workflow",
                        ].map((pill) => ({
                          type: "div",
                          props: {
                            style: {
                              borderRadius: "999px",
                              border: "1px solid rgba(255,255,255,0.14)",
                              background: "rgba(255,255,255,0.06)",
                              padding: "8px 18px",
                              fontSize: "18px",
                              color: "#d8d8e6",
                            },
                            children: pill,
                          },
                        })),
                      },
                    },
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "20px",
                          color: "#ffd54f",
                          fontWeight: 700,
                        },
                        children: "burstpick.app",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  { width: 1200, height: 630 }
);

const buffer = Buffer.from(await image.arrayBuffer());
writeFileSync("public/og-image.png", buffer);
console.log("Generated public/og-image.png (" + buffer.length + " bytes)");
