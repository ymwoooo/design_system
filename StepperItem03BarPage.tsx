import { StepperItem03Bar } from "../../components/ui/stepper-item03-bar";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem03BarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem03Bar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem03Bar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="active" code={`<StepperItem03Bar variant="active" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Bar variant="active" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="default" code={`<StepperItem03Bar variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Bar variant="default" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
