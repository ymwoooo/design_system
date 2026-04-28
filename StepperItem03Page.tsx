import { StepperItem03 } from "../../components/ui/stepper-item03";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem03Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem03</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem03 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="numbered" code={`<StepperItem03 variant="numbered" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03 variant="numbered" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="icon" code={`<StepperItem03 variant="icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03 variant="icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="bullet" code={`<StepperItem03 variant="bullet" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03 variant="bullet" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="checked" code={`<StepperItem03 variant="checked" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03 variant="checked" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
