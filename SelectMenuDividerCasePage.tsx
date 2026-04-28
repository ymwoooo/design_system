import { SelectMenuDividerCase } from "../../components/ui/select-menu-divider-case";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectMenuDividerCasePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectMenuDividerCase</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectMenuDividerCase 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="SelectMenuDividerCase" code={`<SelectMenuDividerCase />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuDividerCase />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
