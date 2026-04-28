import { Radio } from "../../components/ui/radio";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function RadioPage() {
  return (
    <ComponentPageTemplate
      title="Radio"
      description="shadcn/ui Radio 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="true" code={`<Radio variant="true" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Radio variant="true" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="false" code={`<Radio variant="false" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Radio variant="false" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
