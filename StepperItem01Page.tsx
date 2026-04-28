import { StepperItem01 } from "../../components/ui/stepper-item01";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem01Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem01</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem01 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<StepperItem01 variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01 variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<StepperItem01 variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01 variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="lg" code={`<StepperItem01 variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01 variant="lg" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
