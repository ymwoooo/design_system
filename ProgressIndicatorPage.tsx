import { ProgressIndicator } from "../../components/ui/progress-indicator";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressIndicatorPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressIndicator</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressIndicator 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="1" code={`<ProgressIndicator variant="1" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="1" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="2" code={`<ProgressIndicator variant="2" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="2" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3" code={`<ProgressIndicator variant="3" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="3" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="4" code={`<ProgressIndicator variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="4" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="5" code={`<ProgressIndicator variant="5" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="5" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="6" code={`<ProgressIndicator variant="6" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressIndicator variant="6" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
