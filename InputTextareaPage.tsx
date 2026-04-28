import { InputTextarea } from "../../components/ui/input-textarea";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function InputTextareaPage() {
  return (
    <ComponentPageTemplate
      title="Input Textarea"
      description="shadcn/ui InputTextarea 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<InputTextarea variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputTextarea variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<InputTextarea variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputTextarea variant="md" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
