import { Slider } from "../../components/ui/slider";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SliderPage() {
  return (
    <ComponentPageTemplate
      title="Slider"
      description="shadcn/ui Slider 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="enabled" code={`<Slider defaultValue={[50]} max={100} step={1} className="w-48" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Slider defaultValue={[50]} max={100} step={1} className="w-48" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="disabled" code={`<Slider defaultValue={[50]} max={100} step={1} className="w-48" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Slider defaultValue={[50]} max={100} step={1} className="w-48" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
