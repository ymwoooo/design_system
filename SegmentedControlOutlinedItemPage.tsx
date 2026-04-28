import { SegmentedControlOutlinedItem } from "../../components/ui/segmented-control-outlined-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function SegmentedControlOutlinedItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SegmentedControlOutlinedItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SegmentedControlOutlinedItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="true" code={`<SegmentedControlOutlinedItem variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControlOutlinedItem variant="true" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="false" code={`<SegmentedControlOutlinedItem variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControlOutlinedItem variant="false" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
