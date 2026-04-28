import { SkeletonCircle } from "../../components/ui/skeleton-circle";
import ComponentDemo from "../../components/ComponentDemo";

export default function SkeletonCirclePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SkeletonCircle</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SkeletonCircle 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Normal" code={`<SkeletonCircle variant="normal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonCircle variant="normal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="White" code={`<SkeletonCircle variant="white" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonCircle variant="white" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
