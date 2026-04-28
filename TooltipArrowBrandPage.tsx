import { TooltipArrowBrand } from "../../components/ui/tooltip-arrow-brand";
import ComponentDemo from "../../components/ComponentDemo";

export default function TooltipArrowBrandPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TooltipArrowBrand</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TooltipArrowBrand 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="TooltipArrowBrand" code={`<TooltipArrowBrand />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TooltipArrowBrand />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
