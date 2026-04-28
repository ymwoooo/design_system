import { SidebarNavi } from "../../components/ui/sidebar-navi";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SidebarNaviPage() {
  return (
    <ComponentPageTemplate
      title="Sidebar Navigation"
      description="shadcn/ui SidebarNavi 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="false" code={`<SidebarNavi variant="false" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SidebarNavi variant="false" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="true" code={`<SidebarNavi variant="true" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SidebarNavi variant="true" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
