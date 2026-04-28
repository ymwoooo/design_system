import { AutoCompleteItemTitle } from "../../components/ui/auto-complete-item-title";
import ComponentDemo from "../../components/ComponentDemo";

export default function AutoCompleteItemTitlePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AutoCompleteItemTitle</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui AutoCompleteItemTitle 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="AutoCompleteItemTitle" code={`<AutoCompleteItemTitle />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemTitle />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
