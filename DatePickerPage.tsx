import { DatePicker } from "../../components/ui/date-picker";
import ComponentDemo from "../../components/ComponentDemo";

export default function DatePickerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DatePicker</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui DatePicker 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<DatePicker variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePicker variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<DatePicker variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DatePicker variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
