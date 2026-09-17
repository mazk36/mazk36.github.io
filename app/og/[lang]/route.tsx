import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es")
    return new Response("Not found", { status: 404 });
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fafaf8",
        color: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
        }}
      >
        <span>MARCELO JAUREGUI</span>
        <span>LIMA, {lang === "en" ? "PERU" : "PERÚ"}</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 100,
          fontWeight: 700,
          letterSpacing: -6,
          lineHeight: 1.05,
          maxWidth: 980,
        }}
      >
        {lang === "en"
          ? "I build things that move."
          : "Construyo ideas que avanzan."}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #c6c6c0",
          paddingTop: 28,
          fontSize: 25,
        }}
      >
        {lang === "en"
          ? "Software engineer · Co-founder & CTO at Tekapto"
          : "Ingeniería de software · Cofundador y CTO de Tekapto"}
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
