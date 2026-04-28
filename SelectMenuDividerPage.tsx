import { SelectMenuDivider } from "../../components/ui/select-menu-divider";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectMenuDividerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectMenuDivider</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectMenuDivider 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="SelectMenuDivider" code={`<SelectMenuDivider />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuDivider />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
