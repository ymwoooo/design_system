import { PaginationItem } from "../../components/ui/pagination-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function PaginationItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PaginationItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui PaginationItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<PaginationItem variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PaginationItem variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<PaginationItem variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <PaginationItem variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
