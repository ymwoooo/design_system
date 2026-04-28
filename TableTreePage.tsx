import { TableTree } from "../../components/ui/table-tree";
import ComponentDemo from "../../components/ComponentDemo";

export default function TableTreePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TableTree</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TableTree 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="true" code={`<TableTree variant="true" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTree variant="true" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="false" code={`<TableTree variant="false" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTree variant="false" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
