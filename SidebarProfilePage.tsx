import { SidebarProfile } from "../../components/ui/sidebar-profile";
import ComponentDemo from "../../components/ComponentDemo";

export default function SidebarProfilePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SidebarProfile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SidebarProfile 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sidebar_logo_system_admin" code={`<SidebarProfile variant="sidebar_logo_system_admin" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SidebarProfile variant="sidebar_logo_system_admin" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
