import { ScrollBar } from "../../components/ui/scroll-bar";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function ScrollBarPage() {
  return (
    <ComponentPageTemplate
      title="Scroll Bar"
      description="shadcn/ui ScrollBar 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<ScrollBar variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ScrollBar variant="sm" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
