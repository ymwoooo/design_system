import { ColorPickerItem } from "../../components/ui/color-picker-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ColorPickerItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ColorPickerItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ColorPickerItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="off" code={`<ColorPickerItem variant="off" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ColorPickerItem variant="off" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
