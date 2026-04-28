import { ActionMenu } from "../../components/ui/action-menu";
import ComponentDemo from "../../components/ComponentDemo";

export default function ActionMenuPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ActionMenu</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ActionMenu 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ActionMenu" code={`<ActionMenu />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ActionMenu />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
