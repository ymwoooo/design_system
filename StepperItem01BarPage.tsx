import { StepperItem01Bar } from "../../components/ui/stepper-item01-bar";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem01BarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem01Bar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem01Bar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="disabled" code={`<StepperItem01Bar variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Bar variant="disabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="error" code={`<StepperItem01Bar variant="error" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Bar variant="error" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="active" code={`<StepperItem01Bar variant="active" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Bar variant="active" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="completed" code={`<StepperItem01Bar variant="completed" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Bar variant="completed" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="default" code={`<StepperItem01Bar variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Bar variant="default" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
