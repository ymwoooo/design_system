import { AutoComplete } from "../../components/ui/auto-complete";
import ComponentDemo from "../../components/ComponentDemo";

export default function AutoCompletePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AutoComplete</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui AutoComplete 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Normal" code={`<AutoComplete variant="normal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoComplete variant="normal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Search" code={`<AutoComplete variant="search" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoComplete variant="search" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Avatar" code={`<AutoComplete variant="avatar" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoComplete variant="avatar" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Checkbox" code={`<AutoComplete variant="checkbox" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoComplete variant="checkbox" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Thumbnail" code={`<AutoComplete variant="thumbnail" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <AutoComplete variant="thumbnail" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
