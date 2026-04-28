import { SliderSource } from "../../components/ui/slider-source";
import ComponentDemo from "../../components/ComponentDemo";

export default function SliderSourcePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SliderSource</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SliderSource 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="enabled" code={`<SliderSource variant="enabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SliderSource variant="enabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="hover" code={`<SliderSource variant="hover" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SliderSource variant="hover" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="pressed" code={`<SliderSource variant="pressed" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SliderSource variant="pressed" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="disabled" code={`<SliderSource variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SliderSource variant="disabled" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
