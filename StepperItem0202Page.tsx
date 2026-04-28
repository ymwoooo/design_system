import { StepperItem0202 } from "../../components/ui/stepper-item0202";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem0202Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem0202</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem0202 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="left" code={`<StepperItem0202 variant="left" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem0202 variant="left" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="text" code={`<StepperItem0202 variant="text" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem0202 variant="text" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="right" code={`<StepperItem0202 variant="right" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem0202 variant="right" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
