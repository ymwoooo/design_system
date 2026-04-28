import { SidebarSearch } from "../../components/ui/sidebar-search";
import ComponentDemo from "../../components/ComponentDemo";

export default function SidebarSearchPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SidebarSearch</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SidebarSearch 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="false" code={`<SidebarSearch variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarSearch variant="false" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="true" code={`<SidebarSearch variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarSearch variant="true" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
