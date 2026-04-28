import { CardEmployee } from "../../components/ui/card-employee";
import ComponentDemo from "../../components/ComponentDemo";

export default function CardEmployeePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardEmployee</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CardEmployee 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="CardEmployee" code={`<CardEmployee />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardEmployee />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
