import { StepperItem02 } from "../../components/ui/stepper-item02";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem02Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem02</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem02 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="inactive" code={`<StepperItem02 variant="inactive" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem02 variant="inactive" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="completed" code={`<StepperItem02 variant="completed" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem02 variant="completed" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="active" code={`<StepperItem02 variant="active" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem02 variant="active" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
