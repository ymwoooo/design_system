import { TimePickerResource } from "../../components/ui/time-picker-resource";
import ComponentDemo from "../../components/ComponentDemo";

export default function TimePickerResourcePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TimePickerResource</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TimePickerResource 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="none" code={`<TimePickerResource variant="none" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TimePickerResource variant="none" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="start" code={`<TimePickerResource variant="start" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TimePickerResource variant="start" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="middle" code={`<TimePickerResource variant="middle" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TimePickerResource variant="middle" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="end" code={`<TimePickerResource variant="end" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TimePickerResource variant="end" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="single" code={`<TimePickerResource variant="single" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TimePickerResource variant="single" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
