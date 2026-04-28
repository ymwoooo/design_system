
import { useState } from "react";
import ComponentDemo from "../../components/ComponentDemo";

// ─── Types ────────────────────────────────────────────────────
type TabType = "guideline" | "example";
type ButtonType = "Solid" | "Outline" | "Text" | "Danger";
type IconType = "Label only" | "Icon only" | "Left icon with label";

// ─── Shared sub-components ────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        margin: 0,
        color: "#181D27",
        fontSize: 20,
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 600,
        lineHeight: "28px",
      }}
    >
      {children}
    </h2>
  );
}

function CalloutBadge({ n, size = 28 }: { n: number; size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "#C7C4F1",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: "#2C2360",
          fontSize: size > 24 ? 16 : 14,
          fontFamily: "Pretendard, sans-serif",
          fontWeight: 600,
          lineHeight: "22px",
        }}
      >
        {n}
      </span>
    </div>
  );
}

function RadioOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        paddingTop: 6,
        paddingBottom: 6,
        display: "flex",
        alignItems: "center",
        gap: 6,
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Radio circle */}
      <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
        {selected ? (
          <div
            style={{
              width: 13.33,
              height: 13.33,
              left: 3.33,
              top: 3.33,
              position: "absolute",
              background: "#5D52B0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: 6.67, height: 6.67, background: "white", borderRadius: "50%" }}
            />
          </div>
        ) : (
          <div
            style={{
              width: 13.33,
              height: 13.33,
              left: 3.33,
              top: 3.33,
              position: "absolute",
              borderRadius: "50%",
              border: "1px solid rgba(0,0,0,0.24)",
            }}
          />
        )}
      </div>
      <span
        style={{
          color: "#181D27",
          fontSize: 14,
          fontFamily: "Pretendard, sans-serif",
          fontWeight: 400,
          lineHeight: "20px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function ExampleCard({
  type,
  children,
  caption,
}: {
  type: "do" | "dont";
  children: React.ReactNode;
  caption?: string;
}) {
  const color = type === "do" ? "#079455" : "#D92D20";
  const label = type === "do" ? "Do" : "Don't";

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
      {/* Content area */}
      <div
        style={{
          minHeight: 120,
          padding: "32px 24px",
          background: "#FAFAFA",
          border: "1px solid #E9EAEB",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      {/* Do / Don't label below */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: color,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color,
            fontSize: 13,
            fontFamily: "Pretendard, sans-serif",
            fontWeight: 600,
            lineHeight: "18px",
          }}
        >
          {label}
        </span>
      </div>
      {/* Caption */}
      {caption && (
        <p
          style={{
            margin: 0,
            color: "#535862",
            fontSize: 13,
            fontFamily: "Pretendard, sans-serif",
            fontWeight: 400,
            lineHeight: "20px",
          }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

// ─── Inline btn style helper ──────────────────────────────────
function inlineBtn(
  type: "solid" | "outlined" | "text" | "danger" | "tertiary",
  state: "enabled" | "hover" | "focused" | "pressed" | "disabled" = "enabled",
  size: "sm" | "md" | "lg" = "md"
): React.CSSProperties {
  const heights: Record<string, number> = { sm: 32, md: 36, lg: 46 };
  const fontSizes: Record<string, number> = { sm: 12, md: 14, lg: 16 };
  const pxMap: Record<string, number> = { sm: 12, md: 12, lg: 16 };

  // ── State 섹션 버튼 전용: sm 사이즈 고정 스펙 적용 ──
  const smOverride: React.CSSProperties =
    size === "sm"
      ? {
          width: 69,
          height: 32,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 8,
          paddingBottom: 8,
          gap: 4,
        }
      : {};

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: heights[size],
    paddingLeft: pxMap[size],
    paddingRight: pxMap[size],
    borderRadius: 4,
    fontSize: fontSizes[size],
    fontFamily: "Pretendard, sans-serif",
    fontWeight: 600,
    lineHeight: "20px",
    border: "none",
    cursor: state === "disabled" ? "not-allowed" : "default",
    flexShrink: 0,
    ...smOverride,
  };

  if (type === "solid") {
    const bg: Record<string, string> = {
      enabled: "#2C2360",
      hover: "#4A4198",
      focused: "#2C2360",
      pressed: "#3A3078",
      disabled: "#D5D7DA",
    };
    return {
      ...base,
      background: bg[state],
      color: state === "disabled" ? "#A4A7AE" : "white",
      boxShadow:
        state === "focused"
          ? "0 0 0 2px #FFF, 0 0 0 4px #181D27"
          : undefined,
    };
  }
  if (type === "outlined") {
    const bg: Record<string, string> = {
      enabled: "#FFFFFF",
      hover: "#FAFAFA",
      focused: "#FFFFFF",
      pressed: "#F5F5F5",
      disabled: "#FFFFFF",
    };
    return {
      ...base,
      background: bg[state],
      color: state === "disabled" ? "#A4A7AE" : "#2C2360",
      border: `1px solid ${state === "disabled" ? "#E9EAEB" : "#D5D7DA"}`,
      boxShadow:
        state === "focused"
          ? "0 0 0 2px #FFF, 0 0 0 4px #181D27"
          : undefined,
    };
  }
  if (type === "tertiary") {
    const bg: Record<string, string> = {
      enabled: "#5D52B0",
      hover: "#9A94D9",
      focused: "#5D52B0",
      pressed: "#7970C8",
      disabled: "#D5D7DA",
    };
    return {
      ...base,
      background: bg[state],
      color: state === "disabled" ? "#A4A7AE" : "white",
      boxShadow:
        state === "focused"
          ? "0 0 0 2px #FFF, 0 0 0 4px #181D27"
          : undefined,
    };
  }
  if (type === "text") {
    const colors: Record<string, string> = {
      enabled: "#4A4198",
      hover: "#5D52B0",
      focused: "#5D52B0",
      pressed: "#3A3078",
      disabled: "#A4A7AE",
    };
    return {
      ...base,
      background: state === "hover" || state === "focused" ? "#EFEFFA" : "transparent",
      color: colors[state],
      paddingLeft: pxMap[size] / 3,
      paddingRight: pxMap[size] / 3,
      boxShadow:
        state === "focused"
          ? "0 0 0 2px #FFF, 0 0 0 4px #181D27"
          : undefined,
    };
  }
  if (type === "danger") {
    const bg: Record<string, string> = {
      enabled: "#B84451",
      hover: "#C85060",
      focused: "#B84451",
      pressed: "#9E3A45",
      disabled: "#D5D7DA",
    };
    return {
      ...base,
      background: bg[state],
      color: state === "disabled" ? "#A4A7AE" : "white",
      boxShadow:
        state === "focused"
          ? "0 0 0 2px #FFF, 0 0 0 4px #181D27"
          : undefined,
    };
  }
  return base;
}

// ─── Main page ────────────────────────────────────────────────

export default function ButtonPage() {
  const [activeTab, setActiveTab] = useState<TabType>("guideline");
  const [selectedType, setSelectedType] = useState<ButtonType>("Solid");
  const [selectedIcon, setSelectedIcon] = useState<IconType>("Label only");

  // Preview button style in Variants section
  const previewStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: selectedIcon === "Icon only" ? 8 : 12,
      paddingRight: selectedIcon === "Icon only" ? 8 : 12,
      borderRadius: 4,
      fontSize: 14,
      fontFamily: "Pretendard, sans-serif",
      fontWeight: 600,
      lineHeight: "20px",
      border: "none",
      cursor: "default",
    };
    switch (selectedType) {
      case "Solid":
        return { ...base, background: "#2C2360", color: "white" };
      case "Outline":
        return {
          ...base,
          background: "white",
          color: "#2C2360",
          border: "1px solid #7970C8",
        };
      case "Text":
        return {
          ...base,
          background: "transparent",
          color: "#4A4198",
          border: "none",
          paddingLeft: 4,
          paddingRight: 4,
        };
      case "Danger":
        return { ...base, background: "#B84451", color: "white" };
    }
  };

  const iconColor =
    selectedType === "Outline"
      ? "#2C2360"
      : selectedType === "Text"
      ? "#4A4198"
      : "white";

  const IconSquare = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke={iconColor} strokeWidth="1.5" />
    </svg>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        paddingTop: 60,
        paddingBottom: 120,
      }}
    >
      {/* ── Page Header ─────────────────────────────────────────── */}
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 40,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div
            style={{
              color: "#717680",
              fontSize: 14,
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 600,
              lineHeight: "20px",
            }}
          >
            Components
          </div>
          <div
            style={{
              color: "#181D27",
              fontSize: 48,
              fontFamily: "Pretendard, sans-serif",
              fontWeight: 600,
              lineHeight: "52px",
            }}
          >
            Button
          </div>
        </div>
        <div
          style={{
            color: "#181D27",
            fontSize: 16,
            fontFamily: "Pretendard, sans-serif",
            fontWeight: 400,
            lineHeight: "28px",
          }}
        >
          A button triggers an event or action when clicked
        </div>
      </div>

      {/* ── Tab Bar ─────────────────────────────────────────────── */}
      <div
        style={{
          alignSelf: "stretch",
          borderBottom: "1px solid #E9EAEB",
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 60,
        }}
      >
        {(["guideline", "example"] as TabType[]).map((tab) => {
          const active = activeTab === tab;
          const label = tab === "guideline" ? "Guideline" : "Example";
          const indicatorW = tab === "guideline" ? 78 : 72;
          return (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                height: 48,
                paddingLeft: 4,
                paddingRight: 4,
                position: "relative",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  color: active ? "#2C2360" : "#535862",
                  fontSize: 16,
                  fontFamily: "Pretendard, sans-serif",
                  fontWeight: active ? 600 : 400,
                  lineHeight: "22px",
                  userSelect: "none",
                }}
              >
                {label}
              </span>
              {active && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: indicatorW,
                    height: 2,
                    background: "#2C2360",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Tab Content ─────────────────────────────────────────── */}
      {activeTab === "guideline" ? (
        // ===== GUIDELINE TAB =====
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            gap: 60,
          }}
        >
          {/* 1. Anatomy */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>Anatomy</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Artwork */}
              <div
                style={{
                  width: "100%",
                  height: 232,
                  background: "#FAFAFA",
                  borderRadius: 8,
                  border: "1px solid #E9EAEB",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Button in center */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "#2C2360",
                    borderRadius: 4,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 12,
                    paddingRight: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="3" width="14" height="14" rx="2" stroke="white" strokeWidth="1.5" />
                  </svg>
                  <span
                    style={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "Pretendard, sans-serif",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    label
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 5l5 5-5 5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Callout 1 — Left icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "calc(50% - 68px)",
                    top: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CalloutBadge n={1} />
                  <div style={{ width: 1, height: 40, background: "rgba(44,35,96,0.24)" }} />
                </div>

                {/* Callout 2 — Label */}
                <div
                  style={{
                    position: "absolute",
                    left: "calc(50% - 14px)",
                    top: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CalloutBadge n={2} />
                  <div style={{ width: 1, height: 40, background: "rgba(44,35,96,0.24)" }} />
                </div>

                {/* Callout 3 — Right icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "calc(50% + 40px)",
                    top: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CalloutBadge n={3} />
                  <div style={{ width: 1, height: 40, background: "rgba(44,35,96,0.24)" }} />
                </div>

                {/* Callout 4 — Container */}
                <div
                  style={{
                    position: "absolute",
                    left: "calc(50% - 14px)",
                    top: 148,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: 1, height: 28, background: "rgba(44,35,96,0.24)" }} />
                  <CalloutBadge n={4} />
                </div>
              </div>

              {/* Legend */}
              <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
                {[
                  { n: 1, label: "Left Icon" },
                  { n: 2, label: "Label" },
                  { n: 3, label: "Right Icon" },
                  { n: 4, label: "Container" },
                ].map(({ n, label }) => (
                  <div key={n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CalloutBadge n={n} size={24} />
                    <span
                      style={{
                        color: "#181D27",
                        fontSize: 14,
                        fontFamily: "Pretendard, sans-serif",
                        fontWeight: 400,
                        lineHeight: "20px",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. Variants */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>Variants</SectionTitle>
            <div
              style={{
                borderRadius: 8,
                border: "1px solid #E9EAEB",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 600,
                  flexShrink: 0,
                  padding: 60,
                  background: "#FAFAFA",
                  borderRight: "1px solid #E9EAEB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button style={previewStyle()}>
                  {selectedIcon !== "Label only" && <IconSquare size={20} />}
                  {selectedIcon !== "Icon only" && "Button"}
                </button>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: 30,
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  minWidth: 0,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span
                    style={{
                      color: "#717680",
                      fontSize: 14,
                      fontFamily: "Pretendard, sans-serif",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Type
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(["Solid", "Outline", "Text", "Danger"] as ButtonType[]).map((t) => (
                      <RadioOption
                        key={t}
                        label={t}
                        selected={selectedType === t}
                        onClick={() => setSelectedType(t)}
                      />
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span
                    style={{
                      color: "#717680",
                      fontSize: 14,
                      fontFamily: "Pretendard, sans-serif",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Icon
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(["Label only", "Icon only", "Left icon with label"] as IconType[]).map((i) => (
                      <RadioOption
                        key={i}
                        label={i}
                        selected={selectedIcon === i}
                        onClick={() => setSelectedIcon(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Size */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>Size</SectionTitle>
            <div
              style={{
                width: "100%",
                padding: 60,
                background: "#FAFAFA",
                borderRadius: 8,
                border: "1px solid #E9EAEB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 60,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <button
                  style={{
                    width: 77, height: 32, minWidth: 64,
                    paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
                    background: "#2C2360", color: "white", border: "none", borderRadius: 4,
                    fontSize: 12, fontFamily: "Pretendard, sans-serif", fontWeight: 600,
                    lineHeight: "14px", cursor: "default", display: "inline-flex",
                    alignItems: "center", justifyContent: "center", gap: 4, overflow: "hidden",
                  }}
                >
                  Small
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <button
                  style={{
                    width: 77, minWidth: 64,
                    paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
                    background: "#2C2360", color: "white", border: "none", borderRadius: 4,
                    fontSize: 14, fontFamily: "Pretendard, sans-serif", fontWeight: 600,
                    lineHeight: "20px", cursor: "default", display: "inline-flex",
                    alignItems: "center", justifyContent: "center", gap: 6, overflow: "hidden",
                  }}
                >
                  Medium
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <button
                  style={{
                    width: 77, minWidth: 64, padding: 12,
                    background: "#2C2360", color: "white", border: "none", borderRadius: 4,
                    fontSize: 16, fontFamily: "Pretendard, sans-serif", fontWeight: 600,
                    lineHeight: "22px", cursor: "default", display: "inline-flex",
                    alignItems: "center", justifyContent: "center", gap: 8, overflow: "hidden",
                  }}
                >
                  Large
                </button>
              </div>
            </div>
          </section>

          {/* 4. State */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>State</SectionTitle>
            <div
              style={{
                width: "100%",
                padding: "48px",
                background: "#FAFAFA",
                borderRadius: 8,
                border: "1px solid #E9EAEB",
                overflowX: "auto",
              }}
            >
              <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 600 }}>
                <thead>
                  <tr>
                    <th style={{ paddingBottom: 20, textAlign: "left", width: 120 }} />
                    {["Solid Primary", "Outlined", "Solid Tertiary"].map((col) => (
                      <th
                        key={col}
                        style={{
                          paddingBottom: 20,
                          paddingRight: 32,
                          textAlign: "left",
                          color: "#717680",
                          fontSize: 12,
                          fontFamily: "Pretendard, sans-serif",
                          fontWeight: 600,
                          lineHeight: "16px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(["enabled", "hover", "focused", "pressed", "disabled"] as const).map((state) => (
                    <tr key={state}>
                      <td
                        style={{
                          padding: "24px 0",
                          color: "#414651",
                          fontSize: 13,
                          fontFamily: "Pretendard, sans-serif",
                          fontWeight: 600,
                          lineHeight: "18px",
                          textTransform: "capitalize",
                          width: 120,
                        }}
                      >
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                      </td>
                      {(["solid", "outlined", "tertiary"] as const).map((type) => (
                        <td key={type} style={{ padding: "24px 60px 24px 0" }}>
                          <button style={inlineBtn(type, state, "sm")}>Label</button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Action Priority */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>Action Priority</SectionTitle>
            <div
              style={{
                width: "100%",
                padding: "32px 40px",
                background: "#FAFAFA",
                borderRadius: 8,
                border: "1px solid #E9EAEB",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {[
                { type: "solid" as const, desc: "화면에서 가장 중요한 핵심 액션에 사용합니다. 화면당 하나의 버튼 사용을 권장합니다." },
                { type: "outlined" as const, desc: "Primary 액션을 보완하거나 대체할 때, 중요도가 유사한 대안 액션에 사용합니다." },
                { type: "text" as const, desc: "추가 옵션 등 보조적인 기능에 사용하며, 화면 내 시각적 우선순위를 최소화합니다." },
              ].map(({ type, desc }) => (
                <div key={type} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <button style={inlineBtn(type, "enabled", "md")}>Button</button>
                  <span style={{ color: "#535862", fontSize: 14, fontFamily: "Pretendard, sans-serif", fontWeight: 400, lineHeight: "22px" }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Placement */}
          <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SectionTitle>Placement</SectionTitle>
            <p style={{ margin: 0, color: "#535862", fontSize: 14, fontFamily: "Pretendard, sans-serif", fontWeight: 400, lineHeight: "22px" }}>
              Primary Action은 중요한 행동 1개만 강조합니다.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <ExampleCard type="do" caption="페이지의 핵심 액션은 'Primary' 버튼 컬러를 사용하며, 보조 액션은 시각적으로 구분합니다.">
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button style={inlineBtn("outlined", "enabled", "md")}>Cancel</button>
                  <button style={inlineBtn("solid", "enabled", "md")}>Save Changes</button>
                </div>
              </ExampleCard>
              <ExampleCard type="dont" caption="주요 액션이 2개 이상이면 사용자가 혼란을 느낄 수 있으므로, Primary Action을 여러개 사용하지 않습니다.">
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <button style={inlineBtn("solid", "enabled", "md")}>Confirm</button>
                  <button style={inlineBtn("solid", "enabled", "md")}>Submit</button>
                </div>
              </ExampleCard>
            </div>
          </section>

          {/* 7. UX Guidelines */}
          <section style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <SectionTitle>UX Guidelines</SectionTitle>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, color: "#181D27", fontSize: 16, fontFamily: "Pretendard, sans-serif", fontWeight: 600, lineHeight: "22px" }}>
                버튼 아이콘 사용 가이드
              </h3>
              <div style={{ display: "flex", gap: 16 }}>
                <ExampleCard type="do" caption="Chevron 아이콘은 우측에, 그 외 아이콘은 좌측에 사용합니다.">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                    <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Add Store
                    </button>
                    <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                      More
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </ExampleCard>
                <ExampleCard type="dont" caption="아이콘은 선택적으로 텍스트 보조하는 용도로만 사용합니다.">
                  <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Button
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </ExampleCard>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, color: "#181D27", fontSize: 16, fontFamily: "Pretendard, sans-serif", fontWeight: 600, lineHeight: "22px" }}>
                레이블 텍스트
              </h3>
              <div style={{ display: "flex", gap: 16 }}>
                <ExampleCard type="do" caption="필요한 만큼 텍스트를 줄이며 추가적인 맥락을 제공할 경우에 아이콘을 포함합니다.">
                  <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Add
                  </button>
                </ExampleCard>
                <ExampleCard type="dont" caption="텍스트 줄 바꿈이나 잘림을 피하십시오.">
                  <button style={{ ...inlineBtn("solid", "enabled", "md"), maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    Add to the shopping store
                  </button>
                </ExampleCard>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, color: "#181D27", fontSize: 16, fontFamily: "Pretendard, sans-serif", fontWeight: 600, lineHeight: "22px" }}>
                Right-to-left languages
              </h3>
              <div style={{ display: "flex", gap: 16 }}>
                <ExampleCard type="do" caption="텍스트를 줄이고, 필요 시 아이콘으로 보완합니다.">
                  <button style={{ ...inlineBtn("solid", "enabled", "md"), direction: "rtl", gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 4l-4 4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    تأكيد
                  </button>
                </ExampleCard>
                <ExampleCard type="dont" caption="RTL언어에서 아이콘은 UI 레이아웃을 좌우반전하여 제공합니다.">
                  <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    تأكيد
                  </button>
                </ExampleCard>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h3 style={{ margin: 0, color: "#181D27", fontSize: 16, fontFamily: "Pretendard, sans-serif", fontWeight: 600, lineHeight: "22px" }}>
                Danger Action 버튼 사용 가이드
              </h3>
              <div style={{ display: "flex", gap: 16 }}>
                <ExampleCard type="do" caption="롤백 불가, 로그 삭제, DB 초기화 등 서비스에 영향을 끼치는 경우에 Danger 버튼을 사용합니다.">
                  <button style={inlineBtn("danger", "enabled", "md")}>Delete</button>
                </ExampleCard>
                <ExampleCard type="dont" caption="Retry, Cancel, Stop 등 복구 가능한 행동이나 영향도가 낮은 액션에는 사용하지 않습니다.">
                  <button style={inlineBtn("danger", "enabled", "md")}>Cancel</button>
                </ExampleCard>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // ===== EXAMPLE TAB =====
        <div style={{ alignSelf: "stretch" }}>
          <ComponentDemo
            title="Solid Button"
            description="Primary action. Use for the most important action on a page. Only one per section."
            code={`import { Button } from "@/components/ui/button"\n\n// Primary\n<Button variant="default">Button</Button>\n\n// Secondary (Tertiary)\n<Button variant="secondary">Button</Button>`}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              {[
                { label: "Primary", type: "solid" as const },
                { label: "Secondary", type: "tertiary" as const },
              ].map(({ label, type }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <button style={inlineBtn(type, "enabled", "md")}>Button</button>
                  <span style={{ color: "#717680", fontSize: 12, fontFamily: "Pretendard, sans-serif", fontWeight: 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Outlined Button"
            description="Secondary action. Use alongside a Solid button or on its own for a less prominent action."
            code={`import { Button } from "@/components/ui/button"\n\n// Primary Outlined\n<Button variant="outline">Button</Button>\n\n// Neutral (Ghost)\n<Button variant="ghost">Button</Button>`}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              {[
                { label: "Primary", borderColor: "#7970C8" },
                { label: "Neutral", borderColor: "#D5D7DA" },
              ].map(({ label, borderColor }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <button style={{ ...inlineBtn("outlined", "enabled", "md"), border: `1px solid ${borderColor}` }}>
                    Button
                  </button>
                  <span style={{ color: "#717680", fontSize: 12, fontFamily: "Pretendard, sans-serif", fontWeight: 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Text Button"
            description="Tertiary action. Use for the least prominent actions such as navigation links or inline actions."
            code={`import { Button } from "@/components/ui/button"\n\n// Primary Text\n<Button variant="text">Button</Button>\n\n// Neutral Text\n<Button variant="textGray">Button</Button>`}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              {[
                { label: "Primary", color: "#4A4198" },
                { label: "Neutral", color: "#717680" },
              ].map(({ label, color }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <button
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      height: 36, paddingLeft: 4, paddingRight: 4, background: "transparent",
                      color, border: "none", borderRadius: 4, fontSize: 14,
                      fontFamily: "Pretendard, sans-serif", fontWeight: 600, cursor: "default",
                    }}
                  >
                    Button
                  </button>
                  <span style={{ color: "#717680", fontSize: 12, fontFamily: "Pretendard, sans-serif", fontWeight: 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Danger Button"
            description="Destructive action. Use only for irreversible destructive actions such as delete, reset. Always provide a confirmation step."
            code={`import { Button } from "@/components/ui/button"\n\n<Button variant="destructive">Delete</Button>`}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button style={inlineBtn("outlined", "enabled", "md")}>Cancel</button>
              <button style={inlineBtn("danger", "enabled", "md")}>Delete</button>
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="With Icons"
            description="Icons complement the label to aid recognition. Use left icons for actions, right chevrons for navigation."
            code={`import { Button } from "@/components/ui/button"\nimport { PlusIcon, ChevronRightIcon } from "lucide-react"\n\n// Left icon\n<Button variant="default">\n  <PlusIcon />\n  Add Store\n</Button>\n\n// Right icon (chevron)\n<Button variant="default">\n  More\n  <ChevronRightIcon />\n</Button>`}
          >
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V14M2 8H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Add Store
              </button>
              <button style={{ ...inlineBtn("solid", "enabled", "md"), gap: 6 }}>
                More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button style={{ ...inlineBtn("outlined", "enabled", "md"), gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2V14M2 8H14" stroke="#2C2360" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Add
              </button>
            </div>
          </ComponentDemo>
        </div>
      )}
    </div>
  );
}

