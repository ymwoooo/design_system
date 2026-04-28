import { BtnController } from "../../components/ui/btn-controller";
import ComponentDemo from "../../components/ComponentDemo";

export default function BtnControllerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BtnController</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BtnController 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="enabled" code={`<BtnController variant="enabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnController variant="enabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="selected" code={`<BtnController variant="selected" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnController variant="selected" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
