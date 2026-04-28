import { BreadcrumbItem } from "../../components/ui/breadcrumb-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function BreadcrumbItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BreadcrumbItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BreadcrumbItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="BreadcrumbItem" code={`<BreadcrumbItem />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BreadcrumbItem />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
