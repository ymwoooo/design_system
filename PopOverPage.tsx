import { PopOver } from "../../components/ui/pop-over";
import ComponentDemo from "../../components/ComponentDemo";

export default function PopOverPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PopOver</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui PopOver 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="lg" code={`<PopOver variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PopOver variant="lg" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<PopOver variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PopOver variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<PopOver variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PopOver variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
