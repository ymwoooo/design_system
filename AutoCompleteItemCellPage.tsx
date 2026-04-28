import { AutoCompleteItemCell } from "../../components/ui/auto-complete-item-cell";
import ComponentDemo from "../../components/ComponentDemo";

export default function AutoCompleteItemCellPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AutoCompleteItemCell</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui AutoCompleteItemCell 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Normal" code={`<AutoCompleteItemCell variant="normal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemCell variant="normal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Search" code={`<AutoCompleteItemCell variant="search" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemCell variant="search" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Avatar" code={`<AutoCompleteItemCell variant="avatar" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemCell variant="avatar" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Checkbox" code={`<AutoCompleteItemCell variant="checkbox" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemCell variant="checkbox" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Thumbnail" code={`<AutoCompleteItemCell variant="thumbnail" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoCompleteItemCell variant="thumbnail" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
