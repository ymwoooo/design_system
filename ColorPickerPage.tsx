import { ColorPicker } from "../../components/ui/color-picker";
import ComponentDemo from "../../components/ComponentDemo";

export default function ColorPickerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ColorPicker</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ColorPicker 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="system" code={`<ColorPicker variant="system" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ColorPicker variant="system" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="custom" code={`<ColorPicker variant="custom" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ColorPicker variant="custom" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
