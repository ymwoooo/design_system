import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function IndicatorPage() {
  return (
    <ComponentPageTemplate
      title="Indicator"
      description="Indicators show the current position within a sequence of steps or pages."
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Dot indicator</h2>
            <div className="rounded-lg border p-8 bg-muted/30 flex flex-col items-center gap-6">
              {[3, 5, 7].map((count) => (
                <div key={count} className="flex items-center gap-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all"
                      style={{
                        width: i === 0 ? 20 : 8,
                        height: 8,
                        background: i === 0 ? "#2C2360" : "#D5D7DA",
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Step indicator</h2>
            <div className="rounded-lg border p-8 bg-muted/30">
              <div className="flex items-center gap-0">
                {["Step 1", "Step 2", "Step 3", "Step 4"].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                        style={{
                          background: i < 2 ? "#2C2360" : i === 2 ? "#EFEFFA" : "#F5F5F5",
                          color: i < 2 ? "white" : i === 2 ? "#2C2360" : "#A4A7AE",
                          border: i === 2 ? "2px solid #2C2360" : "none",
                        }}
                      >
                        {i < 1 ? "✓" : i + 1}
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{step}</span>
                    </div>
                    {i < 3 && (
                      <div
                        className="h-px w-16 mx-1 mb-5"
                        style={{ background: i < 1 ? "#2C2360" : "#D5D7DA" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      }
    />
  );
}
