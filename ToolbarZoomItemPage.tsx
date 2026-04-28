import { ToolbarZoomItem } from "../../components/ui/toolbar-zoom-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToolbarZoomItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToolbarZoomItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToolbarZoomItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="icon" code={`<ToolbarZoomItem variant="icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarZoomItem variant="icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="value" code={`<ToolbarZoomItem variant="value" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarZoomItem variant="value" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
