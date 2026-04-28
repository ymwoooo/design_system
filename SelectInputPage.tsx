import { SelectInput } from "../../components/ui/select-input";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SelectInputPage() {
  return (
    <ComponentPageTemplate
      title="Select Input"
      description="shadcn/ui SelectInput 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="inline" code={`<SelectInput variant="inline" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SelectInput variant="inline" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="contained" code={`<SelectInput variant="contained" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <SelectInput variant="contained" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
