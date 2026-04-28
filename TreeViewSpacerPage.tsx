import { TreeViewSpacer } from "../../components/ui/tree-view-spacer";
import ComponentDemo from "../../components/ComponentDemo";

export default function TreeViewSpacerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TreeViewSpacer</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TreeViewSpacer 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="level01" code={`<TreeViewSpacer variant="level01" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="level01" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="level02" code={`<TreeViewSpacer variant="level02" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="level02" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="level03" code={`<TreeViewSpacer variant="level03" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="level03" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="level04" code={`<TreeViewSpacer variant="level04" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="level04" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="level05" code={`<TreeViewSpacer variant="level05" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="level05" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="expand_start" code={`<TreeViewSpacer variant="expand_start" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="expand_start" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="expand_branch" code={`<TreeViewSpacer variant="expand_branch" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="expand_branch" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="expand_end" code={`<TreeViewSpacer variant="expand_end" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="expand_end" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="collapse_branch" code={`<TreeViewSpacer variant="collapse_branch" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="collapse_branch" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="connector_branch" code={`<TreeViewSpacer variant="connector_branch" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="connector_branch" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="connector_end" code={`<TreeViewSpacer variant="connector_end" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="connector_end" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="empty" code={`<TreeViewSpacer variant="empty" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeViewSpacer variant="empty" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
