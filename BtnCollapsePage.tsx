import { BtnCollapse } from "../../components/ui/btn-collapse";
import ComponentDemo from "../../components/ComponentDemo";

export default function BtnCollapsePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BtnCollapse</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BtnCollapse 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="collapse" code={`<BtnCollapse variant="collapse" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnCollapse variant="collapse" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="expand" code={`<BtnCollapse variant="expand" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnCollapse variant="expand" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
