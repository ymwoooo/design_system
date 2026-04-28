import { Summary } from "../../components/ui/summary";
import ComponentDemo from "../../components/ComponentDemo";

export default function SummaryPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Summary</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Summary 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="icon" code={`<Summary variant="icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Summary variant="icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="graph" code={`<Summary variant="graph" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Summary variant="graph" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
