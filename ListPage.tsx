import { List } from "../../components/ui/list";
import ComponentDemo from "../../components/ComponentDemo";

export default function ListPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">List</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui List 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="List" code={`<List />`}>
          <div className="flex flex-wrap items-center gap-4">
            <List />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
