import { SelectPopup } from "../../components/ui/select-popup";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectPopupPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectPopup</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectPopup 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="md" code={`<SelectPopup variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopup variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<SelectPopup variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopup variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="search+add" code={`<SelectPopup variant="search+add" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectPopup variant="search+add" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
