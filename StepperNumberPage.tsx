import { StepperNumber } from "../../components/ui/stepper-number";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperNumberPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperNumber</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperNumber 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="activated" code={`<StepperNumber variant="activated" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperNumber variant="activated" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="disabled" code={`<StepperNumber variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperNumber variant="disabled" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
