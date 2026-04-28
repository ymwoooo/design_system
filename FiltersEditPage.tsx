import { FiltersEdit } from "../../components/ui/filters-edit";
import ComponentDemo from "../../components/ComponentDemo";

export default function FiltersEditPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">FiltersEdit</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui FiltersEdit 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="default" code={`<FiltersEdit variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <FiltersEdit variant="default" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="hover" code={`<FiltersEdit variant="hover" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <FiltersEdit variant="hover" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="selection" code={`<FiltersEdit variant="selection" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <FiltersEdit variant="selection" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3+ selected" code={`<FiltersEdit variant="3+ selected" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <FiltersEdit variant="3+ selected" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
