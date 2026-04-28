import { PaginationSearch } from "../../components/ui/pagination-search";
import ComponentDemo from "../../components/ComponentDemo";

export default function PaginationSearchPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PaginationSearch</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui PaginationSearch 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="PaginationSearch" code={`<PaginationSearch />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PaginationSearch />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
