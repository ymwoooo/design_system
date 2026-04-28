import { useState } from "react"

type Tab = "guideline" | "example"

interface StateRowItem {
  label: string
  smSel: boolean
  mdSel: boolean
  hover?: boolean
  disabled?: boolean
}

const stateRows: StateRowItem[] = [
  { label: "Enabled",  smSel: true,  mdSel: true  },
  { label: "Enabled",  smSel: false, mdSel: false },
  { label: "Hover",    smSel: true,  mdSel: true,  hover: true },
  { label: "Hover",    smSel: false, mdSel: false, hover: true },
  { label: "Disabled", smSel: true,  mdSel: true,  disabled: true },
  { label: "Disabled", smSel: false, mdSel: false, disabled: true },
]

function RadioDot({ selected }: { selected: boolean }) {
  return (
    <div style={{ width: 20, height: 20, position: "relative", flexShrink: 0 }}>
      {selected ? (
        <div style={{ width: "13.33px", height: "13.33px", left: "3.33px", top: "3.33px", position: "absolute", background: "#5D52B0", overflow: "hidden", borderRadius: "50%" }}>
          <div style={{ width: "6.67px", height: "6.67px", left: "3.33px", top: "3.33px", position: "absolute", background: "white", borderRadius: "50%" }} />
        </div>
      ) : (
        <div style={{ width: "13.33px", height: "13.33px", left: "3.33px", top: "3.33px", position: "absolute", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.24)" }} />
      )}
    </div>
  )
}

function ChevronSm({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
      <path d="M3.27 10.5L8 5.5l4.73 5" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronMd({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
      <path d="M4.56 12.94L10 7.5l5.44 5.44" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalloutBubble({ num, top, left, linePos }: { num: string; top: number; left: number; linePos: "below" | "above" }) {
  return (
    <div style={{ width: 28, height: 68, left, top, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {linePos === "above" && <div style={{ width: 1, height: 30, opacity: 0.24, background: "#2C2360" }} />}
      <div style={{ width: 28, height: 28, background: "#C7C4F1", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
        <span style={{ color: "#2C2360", fontSize: 16, fontFamily: "Pretendard", fontWeight: 600 }}>{num}</span>
      </div>
      {linePos === "below" && <div style={{ width: 1, flex: 1, opacity: 0.24, background: "#2C2360" }} />}
    </div>
  )
}

export default function ToggleButtonPage() {
  const [tab, setTab] = useState<Tab>("guideline")

  return (
    <div style={{ width: "100%", background: "white", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 60, paddingBottom: 120 }}>
      <div style={{ width: 900, maxWidth: 900, display: "flex", flexDirection: "column", gap: 60 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ color: "#717680", fontSize: 14, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px" }}>Components</div>
            <div style={{ color: "#181D27", fontSize: 48, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "52px" }}>Toggle button</div>
          </div>
          <div style={{ color: "#181D27", fontSize: 16, fontFamily: "Pretendard", fontWeight: 400, lineHeight: "28px" }}>-</div>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: "1px solid #E9EAEB", display: "flex", gap: 16 }}>
          {(["guideline", "example"] as Tab[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{ height: 48, paddingLeft: 4, paddingRight: 4, position: "relative", display: "flex", justifyContent: "center", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}
            >
              <span style={{ color: tab === t ? "#2C2360" : "#535862", fontSize: 16, fontFamily: "Pretendard", fontWeight: tab === t ? 600 : 400, lineHeight: "22px" }}>
                {t === "guideline" ? "Guideline" : "Example"}
              </span>
              {tab === t && <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 2, background: "#2C2360" }} />}
            </button>
          ))}
        </div>

        {tab === "guideline" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>

            {/* Anatomy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#181D27", fontSize: 20, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "28px" }}>Anatomy</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ height: 232, position: "relative", background: "#FAFAFA", overflow: "hidden", borderRadius: 8, border: "1px solid #E9EAEB" }}>
                  {/* Toggle button */}
                  <div style={{ height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, left: 398.5, top: 112, position: "absolute", background: "#2C2360", overflow: "hidden", borderRadius: 9999, display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "22px" }}>label</div>
                    <div style={{ height: 16, minWidth: 16, paddingLeft: 4, paddingRight: 4, background: "#EFEFFA", borderRadius: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <div style={{ color: "#5D52B0", fontSize: 12, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "14px" }}>1</div>
                    </div>
                    <ChevronMd color="white" />
                  </div>
                  <CalloutBubble num="1" left={411} top={44} linePos="below" />
                  <CalloutBubble num="2" left={445} top={76} linePos="below" />
                  <CalloutBubble num="3" left={466} top={44} linePos="below" />
                  <CalloutBubble num="4" left={436} top={137} linePos="above" />
                </div>
                {/* Legend */}
                <div style={{ display: "flex", gap: 24 }}>
                  {[["1", "Label"], ["2", "Badge"], ["3", "Chevron"], ["4", "Container"]].map(([num, label]) => (
                    <div key={num} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 24, height: 24, background: "#C7C4F1", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                        <span style={{ color: "#2C2360", fontSize: 14, fontFamily: "Pretendard", fontWeight: 600 }}>{num}</span>
                      </div>
                      <span style={{ color: "#181D27", fontSize: 14, fontFamily: "Pretendard", fontWeight: 400, lineHeight: "20px" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Variants */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#181D27", fontSize: 20, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "28px" }}>Variants</div>
              <div style={{ borderRadius: 8, border: "1px solid #E9EAEB", display: "flex", overflow: "hidden" }}>
                <div style={{ width: 600, padding: 60, background: "#FAFAFA", borderRight: "1px solid #E9EAEB", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: "#2C2360", overflow: "hidden", borderRadius: 9999, display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
                    <div style={{ color: "white", fontSize: 16, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "22px" }}>label</div>
                    <div style={{ height: 16, minWidth: 16, paddingLeft: 4, paddingRight: 4, background: "#EFEFFA", borderRadius: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <div style={{ color: "#5D52B0", fontSize: 12, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "14px" }}>1</div>
                    </div>
                    <ChevronMd color="white" />
                  </div>
                </div>
                <div style={{ flex: 1, padding: 30, background: "white", display: "flex", flexDirection: "column", justifyContent: "center", gap: 24 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ color: "#717680", fontSize: 14, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px" }}>Select</div>
                    <div>
                      {(["Selected", "Unselected"] as const).map((label, i) => (
                        <div key={label} style={{ paddingTop: 6, paddingBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                          <RadioDot selected={i === 0} />
                          <span style={{ color: "#181D27", fontSize: 14, fontFamily: "Pretendard", fontWeight: 400, lineHeight: "20px" }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ color: "#717680", fontSize: 14, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px" }}>Icon</div>
                    <div>
                      {(["Label only", "Label with badge"] as const).map((label, i) => (
                        <div key={label} style={{ paddingTop: 6, paddingBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                          <RadioDot selected={i === 0} />
                          <span style={{ color: "#181D27", fontSize: 14, fontFamily: "Pretendard", fontWeight: 400, lineHeight: "20px" }}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Size */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#181D27", fontSize: 20, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "28px" }}>Size</div>
              <div style={{ padding: 60, background: "#FAFAFA", overflow: "hidden", borderRadius: 8, border: "1px solid #E9EAEB", display: "flex", justifyContent: "center", alignItems: "center", gap: 60 }}>
                <div style={{ height: 24, paddingLeft: 10, paddingRight: 10, background: "#2C2360", overflow: "hidden", borderRadius: 9999, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ color: "white", fontSize: 12, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "14px" }}>Small</div>
                </div>
                <div style={{ height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: "#2C2360", overflow: "hidden", borderRadius: 9999, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ color: "white", fontSize: 16, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "22px" }}>Medium</div>
                </div>
              </div>
            </div>

            {/* State */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ color: "#181D27", fontSize: 20, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "28px" }}>State</div>
              <div style={{ padding: 48, overflow: "hidden", borderRadius: 8, border: "1px solid #E9EAEB", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 48 }}>
                {stateRows.map(({ label, smSel, mdSel, hover, disabled }, idx) => {
                  const smBg = smSel ? (hover ? "rgba(44,35,96,0.84)" : "#2C2360") : "white"
                  const mdBg = mdSel ? (hover ? "rgba(44,35,96,0.84)" : "#2C2360") : "white"
                  return (
                    <div key={idx} style={{ alignSelf: "stretch", display: "flex", justifyContent: "flex-start", alignItems: "flex-end", gap: 60 }}>
                      <div style={{ width: 120, color: "#717680", fontSize: 14, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px" }}>{label}</div>
                      {/* sm */}
                      <div style={{
                        height: 24, paddingLeft: 10, paddingRight: 10,
                        background: smBg,
                        overflow: "hidden", borderRadius: 9999,
                        display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 4,
                        opacity: disabled ? 0.4 : 1,
                        border: smSel ? "none" : "1px solid #D5D7DA",
                      }}>
                        <div style={{ color: smSel ? "white" : "#535862", fontSize: 12, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "14px" }}>label</div>
                        <ChevronSm color={smSel ? "white" : "#717680"} />
                      </div>
                      {/* md */}
                      <div style={{
                        height: 32, paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
                        background: mdBg,
                        overflow: "hidden", borderRadius: 9999,
                        display: "inline-flex", justifyContent: "center", alignItems: "center", gap: 4,
                        opacity: disabled ? 0.4 : 1,
                        border: mdSel ? "none" : "1px solid #D5D7DA",
                      }}>
                        <div style={{ color: mdSel ? "white" : "#535862", fontSize: 16, fontFamily: "Pretendard", fontWeight: 600, lineHeight: "22px" }}>label</div>
                        <ChevronMd color={mdSel ? "white" : "#717680"} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Placement + UX Guidelines 이미지 */}
            <img
              src="/section.png"
              alt="Toggle button placement and UX guidelines"
              style={{ width: "100%", display: "block" }}
            />

          </div>
        ) : (
          <div style={{ color: "#717680", fontSize: 14, fontFamily: "Pretendard" }}>
            Example 탭 내용
          </div>
        )}

      </div>
    </div>
  )
}
