import { SegmentedControl } from "../../components/ui/segmented-control";
import ComponentDemo from "../../components/ComponentDemo";

export default function SegmentedControlPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SegmentedControl</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SegmentedControl 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="solid" code={`<SegmentedControl variant="solid" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControl variant="solid" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="outlined" code={`<SegmentedControl variant="outlined" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SegmentedControl variant="outlined" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
