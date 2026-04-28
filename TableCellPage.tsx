import { TableCell } from "../../components/ui/table-cell";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function TableCellPage() {
  return (
    <ComponentPageTemplate
      title="Table Cell"
      description="shadcn/ui TableCell 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="left" code={`<TableCell variant="left" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <TableCell variant="left" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="center" code={`<TableCell variant="center" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <TableCell variant="center" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="right" code={`<TableCell variant="right" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <TableCell variant="right" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
