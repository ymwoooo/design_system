import { BtnSort } from "../../components/ui/btn-sort";
import ComponentDemo from "../../components/ComponentDemo";

export default function BtnSortPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BtnSort</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BtnSort 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="default" code={`<BtnSort variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnSort variant="default" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="ascending" code={`<BtnSort variant="ascending" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnSort variant="ascending" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="descending" code={`<BtnSort variant="descending" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnSort variant="descending" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
