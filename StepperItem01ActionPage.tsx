import { StepperItem01Action } from "../../components/ui/stepper-item01-action";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem01ActionPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem01Action</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem01Action 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="lg" code={`<StepperItem01Action variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Action variant="lg" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<StepperItem01Action variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Action variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<StepperItem01Action variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem01Action variant="sm" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
