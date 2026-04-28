import { Stepper03 } from "../../components/ui/stepper03";
import ComponentDemo from "../../components/ComponentDemo";

export default function Stepper03Page() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Stepper03</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Stepper03 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<Stepper03 variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stepper03 variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<Stepper03 variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stepper03 variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
