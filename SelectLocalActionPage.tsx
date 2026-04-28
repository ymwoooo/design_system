import { SelectLocalAction } from "../../components/ui/select-local-action";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectLocalActionPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectLocalAction</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectLocalAction 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<SelectLocalAction variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectLocalAction variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<SelectLocalAction variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectLocalAction variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
