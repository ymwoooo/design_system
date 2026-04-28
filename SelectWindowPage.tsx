import { SelectWindow } from "../../components/ui/select-window";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectWindowPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectWindow</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectWindow 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="year" code={`<SelectWindow variant="year" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectWindow variant="year" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="month" code={`<SelectWindow variant="month" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectWindow variant="month" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="time" code={`<SelectWindow variant="time" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectWindow variant="time" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
