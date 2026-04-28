import { Stepper02Component } from "../../components/ui/stepper02-component";
import ComponentDemo from "../../components/ComponentDemo";

export default function Stepper02ComponentPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Stepper02Component</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Stepper02Component 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Stepper02Component" code={`<Stepper02Component />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stepper02Component />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
