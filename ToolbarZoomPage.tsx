import { ToolbarZoom } from "../../components/ui/toolbar-zoom";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToolbarZoomPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToolbarZoom</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToolbarZoom 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ToolbarZoom" code={`<ToolbarZoom />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarZoom />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
