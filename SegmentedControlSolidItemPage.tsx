import { SegmentedControlSolidItem } from "../../components/ui/segmented-control-solid-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function SegmentedControlSolidItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SegmentedControlSolidItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SegmentedControlSolidItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="true" code={`<SegmentedControlSolidItem variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControlSolidItem variant="true" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="false" code={`<SegmentedControlSolidItem variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControlSolidItem variant="false" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
