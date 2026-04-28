import { TooltipArrowBlack } from "../../components/ui/tooltip-arrow-black";
import ComponentDemo from "../../components/ComponentDemo";

export default function TooltipArrowBlackPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TooltipArrowBlack</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TooltipArrowBlack 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="TooltipArrowBlack" code={`<TooltipArrowBlack />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipArrowBlack />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
