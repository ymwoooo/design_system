import { CheckboxLabel } from "../../components/ui/checkbox-label";
import ComponentDemo from "../../components/ComponentDemo";

export default function CheckboxLabelPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CheckboxLabel</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CheckboxLabel 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<CheckboxLabel variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CheckboxLabel variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<CheckboxLabel variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CheckboxLabel variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
