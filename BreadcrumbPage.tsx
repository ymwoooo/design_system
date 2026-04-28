import { Breadcrumb } from "../../components/ui/breadcrumb";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function BreadcrumbPage() {
  return (
    <ComponentPageTemplate
      title="Breadcrumb"
      description="shadcn/ui Breadcrumb 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="default" code={`<Breadcrumb variant="default" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Breadcrumb variant="default" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="overflow" code={`<Breadcrumb variant="overflow" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Breadcrumb variant="overflow" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
