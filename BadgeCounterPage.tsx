import { BadgeCounter } from "../../components/ui/badge-counter";
import ComponentDemo from "../../components/ComponentDemo";

export default function BadgeCounterPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BadgeCounter</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BadgeCounter 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="purple" code={`<BadgeCounter variant="purple" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeCounter variant="purple" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="gray" code={`<BadgeCounter variant="gray" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeCounter variant="gray" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
