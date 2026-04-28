import { ProgressLine } from "../../components/ui/progress-line";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressLinePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressLine</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressLine 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<ProgressLine variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressLine variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<ProgressLine variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressLine variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
