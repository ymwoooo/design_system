import { TreeViewSpacerPluspadding } from "../../components/ui/tree-view-spacer-pluspadding";
import ComponentDemo from "../../components/ComponentDemo";

export default function TreeViewSpacerPluspaddingPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TreeViewSpacerPluspadding</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TreeViewSpacerPluspadding 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="4" code={`<TreeViewSpacerPluspadding variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacerPluspadding variant="4" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="20" code={`<TreeViewSpacerPluspadding variant="20" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacerPluspadding variant="20" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="36" code={`<TreeViewSpacerPluspadding variant="36" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacerPluspadding variant="36" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="52" code={`<TreeViewSpacerPluspadding variant="52" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacerPluspadding variant="52" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
