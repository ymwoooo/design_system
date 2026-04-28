import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function MapPage() {
  return (
    <ComponentPageTemplate
      title="Map"
      description="Map components display geographic data and location-based information."
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Overview</h2>
            <div
              className="rounded-lg border flex items-center justify-center"
              style={{ height: 320, background: "#F0F0F8" }}
            >
              <div className="text-center space-y-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#2C2360" strokeWidth="1.5" fill="#EFEFFA" />
                  <circle cx="12" cy="9" r="2.5" stroke="#2C2360" strokeWidth="1.5" fill="white" />
                </svg>
                <p className="text-sm font-semibold text-[#2C2360]">Map preview</p>
                <p className="text-xs text-muted-foreground">Map component renders here</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Markers</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {["Default", "Selected", "Cluster"].map((type) => (
                <div key={type} className="rounded-lg border p-4 space-y-3">
                  <div className="flex justify-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                      style={{ background: type === "Selected" ? "#2C2360" : type === "Cluster" ? "#7970C8" : "#A4A7AE" }}
                    >
                      {type === "Cluster" ? "3" : "•"}
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-center">{type}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      }
    />
  );
}
