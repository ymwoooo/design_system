import { Divider } from "../../components/ui/divider";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function DividerPage() {
  return (
    <ComponentPageTemplate
      title="Divider"
      description="shadcn/ui Divider 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="vertical" code={`<Divider variant="vertical" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Divider variant="vertical" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="horizontal" code={`<Divider variant="horizontal" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Divider variant="horizontal" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
