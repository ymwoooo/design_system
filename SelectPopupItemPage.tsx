import { SelectPopupItem } from "../../components/ui/select-popup-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectPopupItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectPopupItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectPopupItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="default" code={`<SelectPopupItem variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopupItem variant="default" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="radio" code={`<SelectPopupItem variant="radio" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopupItem variant="radio" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="checkbox" code={`<SelectPopupItem variant="checkbox" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopupItem variant="checkbox" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="go back" code={`<SelectPopupItem variant="go back" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopupItem variant="go back" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="count" code={`<SelectPopupItem variant="count" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopupItem variant="count" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
