import { BadgeTrendIndicator } from "../../components/ui/badge-trend-indicator";
import ComponentDemo from "../../components/ComponentDemo";

export default function BadgeTrendIndicatorPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BadgeTrendIndicator</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BadgeTrendIndicator 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="down" code={`<BadgeTrendIndicator variant="down" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeTrendIndicator variant="down" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="up" code={`<BadgeTrendIndicator variant="up" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeTrendIndicator variant="up" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
