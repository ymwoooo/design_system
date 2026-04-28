import { ProgressSection } from "../../components/ui/progress-section";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressSectionPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressSection</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressSection 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ProgressSection" code={`<ProgressSection />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressSection />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
