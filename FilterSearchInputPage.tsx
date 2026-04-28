import { FilterSearchInput } from "../../components/ui/filter-search-input";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function FilterSearchInputPage() {
  return (
    <ComponentPageTemplate
      title="Filter Search Input"
      description="shadcn/ui FilterSearchInput 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<FilterSearchInput variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <FilterSearchInput variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<FilterSearchInput variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <FilterSearchInput variant="md" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
