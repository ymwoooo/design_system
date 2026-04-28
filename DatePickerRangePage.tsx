import { DatePickerRange } from "../../components/ui/date-picker-range";
import ComponentDemo from "../../components/ComponentDemo";

export default function DatePickerRangePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DatePickerRange</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui DatePickerRange 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="start" code={`<DatePickerRange variant="start" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerRange variant="start" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="middle" code={`<DatePickerRange variant="middle" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerRange variant="middle" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="end" code={`<DatePickerRange variant="end" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerRange variant="end" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
