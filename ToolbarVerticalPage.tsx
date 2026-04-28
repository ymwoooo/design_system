import { ToolbarVertical } from "../../components/ui/toolbar-vertical";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToolbarVerticalPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToolbarVertical</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToolbarVertical 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ToolbarVertical" code={`<ToolbarVertical />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarVertical />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
