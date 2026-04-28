import { ColorPickerItemState } from "../../components/ui/color-picker-item-state";
import ComponentDemo from "../../components/ComponentDemo";

export default function ColorPickerItemStatePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ColorPickerItemState</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ColorPickerItemState 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="on" code={`<ColorPickerItemState variant="on" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ColorPickerItemState variant="on" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="off" code={`<ColorPickerItemState variant="off" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ColorPickerItemState variant="off" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
