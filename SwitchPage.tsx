import { Switch } from "../../components/ui/switch";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SwitchPage() {
  return (
    <ComponentPageTemplate
      title="Switch"
      description="shadcn/ui Switch 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<div className="flex items-center gap-2"> <Switch id="sm" /> <label htmlFor="sm" className="text-sm">sm</label> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch id="sm" />
                <label htmlFor="sm" className="text-sm">sm</label>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<div className="flex items-center gap-2"> <Switch id="md" /> <label htmlFor="md" className="text-sm">md</label> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch id="md" />
                <label htmlFor="md" className="text-sm">md</label>
              </div>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
