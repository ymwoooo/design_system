import { Checkbox } from "../../components/ui/checkbox";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function CheckboxPage() {
  return (
    <ComponentPageTemplate
      title="Checkbox"
      description="shadcn/ui Checkbox 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="false" code={`<div className="flex items-center gap-2"> <Checkbox id="false" /> <label htmlFor="false" className="text-sm">false</label> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="false" />
                <label htmlFor="false" className="text-sm">false</label>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo title="true" code={`<div className="flex items-center gap-2"> <Checkbox id="true" /> <label htmlFor="true" className="text-sm">true</label> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="true" />
                <label htmlFor="true" className="text-sm">true</label>
              </div>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
