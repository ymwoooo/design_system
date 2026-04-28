import { TreeView } from "../../components/ui/tree-view";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function TreeViewPage() {
  return (
    <ComponentPageTemplate
      title="Tree View"
      description="shadcn/ui TreeView 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="true" code={`<TreeView variant="true" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <TreeView variant="true" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="false" code={`<TreeView variant="false" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <TreeView variant="false" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
