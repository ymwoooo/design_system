import { Pagination } from "../../components/ui/pagination";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function PaginationPage() {
  return (
    <ComponentPageTemplate
      title="Pagination"
      description="shadcn/ui Pagination 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="Pagination" code={`<Pagination />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Pagination />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
