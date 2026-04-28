import { TableTypeForDescription } from "../../components/ui/table-type-for-description";
import ComponentDemo from "../../components/ComponentDemo";

export default function TableTypeForDescriptionPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TableTypeForDescription</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TableTypeForDescription 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="area title" code={`<TableTypeForDescription variant="area title" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTypeForDescription variant="area title" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="content" code={`<TableTypeForDescription variant="content" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTypeForDescription variant="content" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="subtitle" code={`<TableTypeForDescription variant="subtitle" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTypeForDescription variant="subtitle" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="title" code={`<TableTypeForDescription variant="title" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TableTypeForDescription variant="title" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
