import { Btn } from "../../components/ui/btn";
import ComponentDemo from "../../components/ComponentDemo";

function AnatomyCallout({ number }: { number: number }) {
  return (
    <span
      style={{
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#535862",
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Pretendard, sans-serif",
        zIndex: 10,
        boxShadow: "0 0 0 2px #fff",
      }}
    >
      {number}
    </span>
  );
}

export default function BtnPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Btn</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Btn 컴포넌트 예시
        </p>
      </div>

      {/* Anatomy Section */}
      <div>
        <h2
          style={{
            fontFamily: "Pretendard, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "26px",
            color: "#181D27",
            marginBottom: 16,
          }}
        >
          Anatomy
        </h2>

        <div
          style={{
            border: "1px solid #E9EAEB",
            borderRadius: 6,
            background: "#F9F9FB",
            padding: "48px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
          }}
        >
          {/* Button preview with callout markers */}
          <div style={{ position: "relative", display: "inline-flex" }}>
            {/* ① Container callout (top-left of button) */}
            <div style={{ position: "absolute", top: -10, left: -10 }}>
              <AnatomyCallout number={1} />
            </div>

            {/* Button */}
            <div
              style={{
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                background: "var(--Primitive-Brand-800, #2C2360)",
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                display: "inline-flex",
              }}
            >
              {/* Left Icon */}
              <div
                style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* ② Left icon callout */}
                <div style={{ position: "absolute", top: -10, left: -10 }}>
                  <AnatomyCallout number={2} />
                </div>
                <img
                  src="/images/ic-button.svg"
                  alt="left icon"
                  width={20}
                  height={20}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              {/* Label */}
              <div
                style={{
                  position: "relative",
                  textAlign: "center",
                  color: "var(--Primitive-Common-White, white)",
                  fontSize: 14,
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: 600,
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                {/* ③ Label callout */}
                <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)" }}>
                  <AnatomyCallout number={3} />
                </div>
                label
              </div>

              {/* Right Icon */}
              <div
                style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {/* ④ Right icon callout */}
                <div style={{ position: "absolute", top: -10, right: -10 }}>
                  <AnatomyCallout number={4} />
                </div>
                <img
                  src="/images/ic-button.svg"
                  alt="right icon"
                  width={20}
                  height={20}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>
          </div>

          {/* Anatomy legend */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 32px",
              width: "100%",
              maxWidth: 360,
            }}
          >
            {[
              { num: 1, label: "Container" },
              { num: 2, label: "Left Icon" },
              { num: 3, label: "Label" },
              { num: 4, label: "Right Icon" },
            ].map(({ num, label }) => (
              <div
                key={num}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "Pretendard, sans-serif",
                  fontSize: 13,
                  color: "#535862",
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "#535862",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {num}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Token Spec */}
        <div
          style={{
            marginTop: 24,
            border: "1px solid #E9EAEB",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Pretendard, sans-serif", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#F9F9FB", borderBottom: "1px solid #E9EAEB" }}>
                <th style={{ textAlign: "left", padding: "10px 16px", color: "#181D27", fontWeight: 600 }}>Part</th>
                <th style={{ textAlign: "left", padding: "10px 16px", color: "#181D27", fontWeight: 600 }}>Property</th>
                <th style={{ textAlign: "left", padding: "10px 16px", color: "#181D27", fontWeight: 600 }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                { part: "Container", property: "border-radius", value: "4px" },
                { part: "Container", property: "padding", value: "8px 12px" },
                { part: "Container", property: "background", value: "#2C2360" },
                { part: "Container", property: "gap", value: "6px" },
                { part: "Icon", property: "size", value: "20 × 20px" },
                { part: "Icon", property: "source", value: "/images/ic-button.svg" },
                { part: "Label", property: "font-size", value: "14px" },
                { part: "Label", property: "font-weight", value: "600 (SemiBold)" },
                { part: "Label", property: "line-height", value: "20px" },
                { part: "Label", property: "color", value: "white" },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid #E9EAEB",
                    background: i % 2 === 0 ? "#fff" : "#FAFAFA",
                  }}
                >
                  <td style={{ padding: "9px 16px", color: "#535862" }}>{row.part}</td>
                  <td style={{ padding: "9px 16px", color: "#535862", fontFamily: "monospace" }}>{row.property}</td>
                  <td style={{ padding: "9px 16px", color: "#181D27", fontFamily: "monospace" }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Component Demos */}
      <div className="space-y-6">
        <ComponentDemo title="solid" code={`<Btn variant="solid" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Btn variant="solid" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="danger" code={`<Btn variant="danger" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Btn variant="danger" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="outlined" code={`<Btn variant="outlined" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Btn variant="outlined" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="text" code={`<Btn variant="text" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Btn variant="text" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
