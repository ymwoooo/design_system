import { TooltipArrowWhite } from "../../components/ui/tooltip-arrow-white";
import ComponentDemo from "../../components/ComponentDemo";

export default function TooltipArrowWhitePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TooltipArrowWhite</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TooltipArrowWhite 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="TooltipArrowWhite" code={`<TooltipArrowWhite />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipArrowWhite />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
