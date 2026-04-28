import { SectionMessage } from "../../components/ui/section-message";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SectionMessagePage() {
  return (
    <ComponentPageTemplate
      title="Section Message"
      description="shadcn/ui SectionMessage 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="alert" code={`<SectionMessage variant="alert" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="alert" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="warning" code={`<SectionMessage variant="warning" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="warning" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="success" code={`<SectionMessage variant="success" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="success" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="info" code={`<SectionMessage variant="info" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="info" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="default" code={`<SectionMessage variant="default" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="default" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Brand light" code={`<SectionMessage variant="brand light" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="brand light" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Brand" code={`<SectionMessage variant="brand" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SectionMessage variant="brand" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
