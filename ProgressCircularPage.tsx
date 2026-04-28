import { ProgressCircular } from "../../components/ui/progress-circular";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressCircularPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressCircular</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressCircular 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="100%" code={`<ProgressCircular variant="100%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="100%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="replay" code={`<ProgressCircular variant="replay" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="replay" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="stop" code={`<ProgressCircular variant="stop" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="stop" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="75%" code={`<ProgressCircular variant="75%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="75%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="50%" code={`<ProgressCircular variant="50%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="50%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="25%" code={`<ProgressCircular variant="25%" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="25%" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Default" code={`<ProgressCircular variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressCircular variant="default" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
