import { StepperItem02Title } from "../../components/ui/stepper-item02-title";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem02TitlePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem02Title</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem02Title 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="StepperItem02Title" code={`<StepperItem02Title />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem02Title />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
