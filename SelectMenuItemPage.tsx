import { SelectMenuItem } from "../../components/ui/select-menu-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function SelectMenuItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectMenuItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SelectMenuItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="log_out" code={`<SelectMenuItem variant="log_out" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuItem variant="log_out" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="title" code={`<SelectMenuItem variant="title" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuItem variant="title" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<SelectMenuItem variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuItem variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<SelectMenuItem variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SelectMenuItem variant="sm" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
