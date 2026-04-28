import { InputTextfield } from "../../components/ui/input-textfield";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function InputTextfieldPage() {
  return (
    <ComponentPageTemplate
      title="Input Textfield"
      description="shadcn/ui InputTextfield 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="md" code={`<InputTextfield variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputTextfield variant="md" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<InputTextfield variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputTextfield variant="sm" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
