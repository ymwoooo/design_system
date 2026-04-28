import { BtnControllerThin } from "../../components/ui/btn-controller-thin";
import ComponentDemo from "../../components/ComponentDemo";

export default function BtnControllerThinPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BtnControllerThin</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BtnControllerThin 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="BtnControllerThin" code={`<BtnControllerThin />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BtnControllerThin />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
