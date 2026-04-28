import { DbdDatepicker } from "../../components/ui/dbd-datepicker";
import ComponentDemo from "../../components/ComponentDemo";

export default function DbdDatepickerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DbdDatepicker</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui DbdDatepicker 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="DbdDatepicker" code={`<DbdDatepicker />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DbdDatepicker />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
