import { InputSearch } from "../../components/ui/input-search";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function InputSearchPage() {
  return (
    <ComponentPageTemplate
      title="Input Search"
      description="shadcn/ui InputSearch 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="md" code={`<InputSearch variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputSearch variant="md" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<InputSearch variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <InputSearch variant="sm" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
