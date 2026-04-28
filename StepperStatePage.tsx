import { StepperState } from "../../components/ui/stepper-state";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperStatePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperState</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperState 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<StepperState variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperState variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<StepperState variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperState variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
