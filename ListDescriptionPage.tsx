import { ListDescription } from "../../components/ui/list-description";
import ComponentDemo from "../../components/ComponentDemo";

export default function ListDescriptionPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ListDescription</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ListDescription 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ListDescription" code={`<ListDescription />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListDescription />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
