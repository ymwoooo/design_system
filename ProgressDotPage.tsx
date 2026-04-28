import { ProgressDot } from "../../components/ui/progress-dot";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressDotPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressDot</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressDot 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="disabled" code={`<ProgressDot variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressDot variant="disabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="done" code={`<ProgressDot variant="done" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressDot variant="done" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="enabled" code={`<ProgressDot variant="enabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressDot variant="enabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="hover" code={`<ProgressDot variant="hover" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressDot variant="hover" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
