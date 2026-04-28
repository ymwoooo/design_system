import { ToggleButtonGroup } from "../../components/ui/toggle-button-group";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToggleButtonGroupPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToggleButtonGroup</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToggleButtonGroup 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<ToggleButtonGroup variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToggleButtonGroup variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<ToggleButtonGroup variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToggleButtonGroup variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
