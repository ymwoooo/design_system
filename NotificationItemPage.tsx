import { NotificationItem } from "../../components/ui/notification-item";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function NotificationItemPage() {
  return (
    <ComponentPageTemplate
      title="Notification Item"
      description="shadcn/ui NotificationItem 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="active" code={`<NotificationItem variant="active" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <NotificationItem variant="active" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="hover" code={`<NotificationItem variant="hover" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <NotificationItem variant="hover" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="pressed" code={`<NotificationItem variant="pressed" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <NotificationItem variant="pressed" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
