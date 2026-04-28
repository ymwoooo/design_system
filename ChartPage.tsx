export default function ChartPage() {
  const barData = [60, 85, 45, 92, 70, 55, 78]
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  return (
    <div className="space-y-8 p-8">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-muted-foreground">Components / Data visualization</p>
        <h1 className="text-2xl font-semibold tracking-tight">Chart</h1>
        <p className="text-sm text-muted-foreground">
          Charts visualize data in a clear and accessible way.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Bar chart</h2>
        <div className="rounded-lg border p-6 bg-muted/30">
          <div className="flex items-end gap-3 h-40">
            {barData.map((val, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <span className="text-xs text-muted-foreground">{val}</span>
                <div
                  className="w-full rounded-t"
                  style={{ height: `${val}%`, background: i === 3 ? "#2C2360" : "#C7C4F1" }}
                />
                <span className="text-xs text-muted-foreground">{labels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Donut chart</h2>
        <div className="rounded-lg border p-6 bg-muted/30 flex justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#EFEFFA" strokeWidth="3.8" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2C2360" strokeWidth="3.8"
                strokeDasharray="60 40" strokeDashoffset="0" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#7970C8" strokeWidth="3.8"
                strokeDasharray="25 75" strokeDashoffset="-60" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#C7C4F1" strokeWidth="3.8"
                strokeDasharray="15 85" strokeDashoffset="-85" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-semibold">60%</span>
              <span className="text-xs text-muted-foreground">Total</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage guidelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 space-y-2">
            <p className="text-sm font-semibold text-green-700">Do</p>
            <p className="text-sm text-muted-foreground">Use charts to show trends, comparisons, and distributions that are difficult to convey in plain text.</p>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <p className="text-sm font-semibold text-red-700">Don't</p>
            <p className="text-sm text-muted-foreground">Don't use more than 5–7 data series in a single chart — it becomes too complex to read.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
