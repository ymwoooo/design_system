import { ProgressBar } from "../../components/ui/progress-bar";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressBarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressBar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressBar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="0%" code={`<ProgressBar variant="0%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="0%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="25%" code={`<ProgressBar variant="25%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="25%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="50%" code={`<ProgressBar variant="50%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="50%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="75%" code={`<ProgressBar variant="75%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="75%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="100%" code={`<ProgressBar variant="100%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="100%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="xs" code={`<ProgressBar variant="xs" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="xs" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<ProgressBar variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<ProgressBar variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="lg" code={`<ProgressBar variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBar variant="lg" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
