import { BadgeStatus } from "../../components/ui/badge-status";
import ComponentDemo from "../../components/ComponentDemo";

export default function BadgeStatusPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BadgeStatus</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BadgeStatus 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="dot" code={`<BadgeStatus variant="dot" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeStatus variant="dot" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="number" code={`<BadgeStatus variant="number" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeStatus variant="number" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="new" code={`<BadgeStatus variant="new" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeStatus variant="new" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
