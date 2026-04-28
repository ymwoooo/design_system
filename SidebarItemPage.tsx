import { SidebarItem } from "../../components/ui/sidebar-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function SidebarItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SidebarItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SidebarItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="icon" code={`<SidebarItem variant="icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarItem variant="icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="main" code={`<SidebarItem variant="main" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarItem variant="main" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sub" code={`<SidebarItem variant="sub" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarItem variant="sub" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="Default" code={`<SidebarItem variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarItem variant="default" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
