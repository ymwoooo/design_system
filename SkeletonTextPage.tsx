import { SkeletonText } from "../../components/ui/skeleton-text";
import ComponentDemo from "../../components/ComponentDemo";

export default function SkeletonTextPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SkeletonText</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SkeletonText 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Normal" code={`<SkeletonText variant="normal" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonText variant="normal" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="White" code={`<SkeletonText variant="white" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SkeletonText variant="white" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
