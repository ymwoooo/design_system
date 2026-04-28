import { ModalWeb } from "../../components/ui/modal-web";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function ModalWebPage() {
  return (
    <ComponentPageTemplate
      title="Modal Web"
      description="shadcn/ui ModalWeb 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<ModalWeb variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ModalWeb variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<ModalWeb variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ModalWeb variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<ModalWeb variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ModalWeb variant="md" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
