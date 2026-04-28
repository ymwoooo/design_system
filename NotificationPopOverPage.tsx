import { NotificationPopOver } from "../../components/ui/notification-pop-over";
import ComponentDemo from "../../components/ComponentDemo";

export default function NotificationPopOverPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">NotificationPopOver</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui NotificationPopOver 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="NotificationPopOver" code={`<NotificationPopOver />`}>
          <div className="flex flex-wrap items-center gap-4">
            <NotificationPopOver />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
