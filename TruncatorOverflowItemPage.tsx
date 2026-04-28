import { TruncatorOverflowItem } from "../../components/ui/truncator-overflow-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function TruncatorOverflowItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TruncatorOverflowItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui TruncatorOverflowItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="TruncatorOverflowItem" code={`<TruncatorOverflowItem />`}>
          <div className="flex flex-wrap items-center gap-4">
            <TruncatorOverflowItem />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
