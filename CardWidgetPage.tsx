import { CardWidget } from "../../components/ui/card-widget";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function CardWidgetPage() {
  return (
    <ComponentPageTemplate
      title="Card Widget"
      description="shadcn/ui CardWidget 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="enabled" code={`<CardWidget variant="enabled" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <CardWidget variant="enabled" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="hover" code={`<CardWidget variant="hover" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <CardWidget variant="hover" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="pressed" code={`<CardWidget variant="pressed" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <CardWidget variant="pressed" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="disabled" code={`<CardWidget variant="disabled" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <CardWidget variant="disabled" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
