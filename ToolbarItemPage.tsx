import { ToolbarItem } from "../../components/ui/toolbar-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToolbarItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToolbarItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToolbarItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<ToolbarItem variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarItem variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<ToolbarItem variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToolbarItem variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
