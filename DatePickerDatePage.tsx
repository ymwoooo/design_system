import { DatePickerDate } from "../../components/ui/date-picker-date";
import ComponentDemo from "../../components/ComponentDemo";

export default function DatePickerDatePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DatePickerDate</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui DatePickerDate 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="day" code={`<DatePickerDate variant="day" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerDate variant="day" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="preview" code={`<DatePickerDate variant="preview" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerDate variant="preview" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="holiday" code={`<DatePickerDate variant="holiday" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerDate variant="holiday" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="blank" code={`<DatePickerDate variant="blank" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePickerDate variant="blank" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
