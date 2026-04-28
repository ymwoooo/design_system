import { StepperItem0201 } from "../../components/ui/stepper-item0201";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem0201Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem0201</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem0201 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="lg" code={`<StepperItem0201 variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem0201 variant="lg" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<StepperItem0201 variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem0201 variant="sm" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
