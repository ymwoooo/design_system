import { StepperItem03Symbol } from "../../components/ui/stepper-item03-symbol";
import ComponentDemo from "../../components/ComponentDemo";

export default function StepperItem03SymbolPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StepperItem03Symbol</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui StepperItem03Symbol 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="numbered" code={`<StepperItem03Symbol variant="numbered" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Symbol variant="numbered" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="icon" code={`<StepperItem03Symbol variant="icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Symbol variant="icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="bullet" code={`<StepperItem03Symbol variant="bullet" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Symbol variant="bullet" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="checked" code={`<StepperItem03Symbol variant="checked" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <StepperItem03Symbol variant="checked" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
