import { Badge } from "../../components/ui/badge";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function BadgePage() {
  return (
    <ComponentPageTemplate
      title="Badge"
      description="shadcn/ui Badge 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="md" code={`<Badge>md</Badge>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>md</Badge>
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<Badge>sm</Badge>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>sm</Badge>
            </div>
          </ComponentDemo>

          <ComponentDemo title="lg" code={`<Badge>lg</Badge>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>lg</Badge>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
