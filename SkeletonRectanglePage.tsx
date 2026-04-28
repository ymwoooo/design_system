import { SkeletonRectangle } from "../../components/ui/skeleton-rectangle";
import ComponentDemo from "../../components/ComponentDemo";

export default function SkeletonRectanglePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SkeletonRectangle</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SkeletonRectangle 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Normal" code={`<SkeletonRectangle variant="normal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonRectangle variant="normal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="White" code={`<SkeletonRectangle variant="white" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonRectangle variant="white" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
