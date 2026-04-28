import { ProgressiveBar } from "../../components/ui/progressive-bar";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressiveBarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressiveBar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressiveBar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ProgressiveBar" code={`<ProgressiveBar />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressiveBar />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
