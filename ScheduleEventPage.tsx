import { ScheduleEvent } from "../../components/ui/schedule-event";
import ComponentDemo from "../../components/ComponentDemo";

export default function ScheduleEventPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ScheduleEvent</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ScheduleEvent 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="grey" code={`<ScheduleEvent variant="grey" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="grey" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="teal" code={`<ScheduleEvent variant="teal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="teal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="green" code={`<ScheduleEvent variant="green" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="green" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="purple" code={`<ScheduleEvent variant="purple" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="purple" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="yellow" code={`<ScheduleEvent variant="yellow" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="yellow" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="pink" code={`<ScheduleEvent variant="pink" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="pink" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="orange" code={`<ScheduleEvent variant="orange" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="orange" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="brand" code={`<ScheduleEvent variant="brand" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="brand" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="red" code={`<ScheduleEvent variant="red" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="red" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="light_blue" code={`<ScheduleEvent variant="light_blue" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ScheduleEvent variant="light_blue" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
