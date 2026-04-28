import { EmptyState } from "../../components/ui/empty-state";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function EmptyStatePage() {
  return (
    <ComponentPageTemplate
      title="Empty State"
      description="shadcn/ui EmptyState 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="EmptyState" code={`<EmptyState />`}>
            <div className="flex flex-wrap items-center gap-4">
              <EmptyState />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
