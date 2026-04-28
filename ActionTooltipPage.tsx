import { ActionTooltip } from "../../components/ui/action-tooltip";
import ComponentDemo from "../../components/ComponentDemo";

export default function ActionTooltipPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ActionTooltip</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ActionTooltip 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<ActionTooltip variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ActionTooltip variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="replace_component" code={`<ActionTooltip variant="replace_component" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ActionTooltip variant="replace_component" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<ActionTooltip variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ActionTooltip variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
