import { Toast } from "../../components/ui/toast";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function ToastPage() {
  return (
    <ComponentPageTemplate
      title="Toast"
      description="shadcn/ui Toast 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="success" code={`<Toast variant="success" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Toast variant="success" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="brand" code={`<Toast variant="brand" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Toast variant="brand" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="info" code={`<Toast variant="info" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Toast variant="info" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="warning" code={`<Toast variant="warning" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Toast variant="warning" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="error" code={`<Toast variant="error" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Toast variant="error" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
