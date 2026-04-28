import { Stepper02 } from "../../components/ui/stepper02";
import ComponentDemo from "../../components/ComponentDemo";

export default function Stepper02Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Stepper02</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Stepper02 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<Stepper02 variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stepper02 variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<Stepper02 variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stepper02 variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
