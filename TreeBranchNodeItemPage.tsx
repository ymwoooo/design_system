import { TreeBranchNodeItem } from "../../components/ui/tree-branch-node-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function TreeBranchNodeItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TreeBranchNodeItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TreeBranchNodeItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="branch" code={`<TreeBranchNodeItem variant="branch" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="branch" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="leaf" code={`<TreeBranchNodeItem variant="leaf" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="leaf" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="default" code={`<TreeBranchNodeItem variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="default" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="dependentChild" code={`<TreeBranchNodeItem variant="dependentchild" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="dependentchild" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="selectedParent" code={`<TreeBranchNodeItem variant="selectedparent" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="selectedparent" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="pressedHover" code={`<TreeBranchNodeItem variant="pressedhover" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="pressedhover" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="input" code={`<TreeBranchNodeItem variant="input" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TreeBranchNodeItem variant="input" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
