import { AutoCompleteItemActionButton } from "../../components/ui/auto-complete-item-action-button";
import ComponentDemo from "../../components/ComponentDemo";

export default function AutoCompleteItemActionButtonPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AutoCompleteItemActionButton</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui AutoCompleteItemActionButton 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="AutoCompleteItemActionButton" code={`<AutoCompleteItemActionButton />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemActionButton />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
