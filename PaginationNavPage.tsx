import { PaginationNav } from "../../components/ui/pagination-nav";
import ComponentDemo from "../../components/ComponentDemo";

export default function PaginationNavPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PaginationNav</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui PaginationNav 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="PaginationNav" code={`<PaginationNav />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PaginationNav />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
