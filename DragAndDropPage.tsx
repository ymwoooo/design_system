import { DragAndDrop } from "../../components/ui/drag-and-drop";
import ComponentDemo from "../../components/ComponentDemo";

export default function DragAndDropPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DragAndDrop</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui DragAndDrop 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="DragAndDrop" code={`<DragAndDrop />`}>
          <div className="flex flex-wrap items-center gap-4">
            <DragAndDrop />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
