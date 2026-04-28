import { TooltipArrowWhiteSm } from "../../components/ui/tooltip-arrow-white-sm";
import ComponentDemo from "../../components/ComponentDemo";

export default function TooltipArrowWhiteSmPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TooltipArrowWhiteSm</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TooltipArrowWhiteSm 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="TooltipArrowWhiteSm" code={`<TooltipArrowWhiteSm />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipArrowWhiteSm />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
