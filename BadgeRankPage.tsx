import { BadgeRank } from "../../components/ui/badge-rank";
import ComponentDemo from "../../components/ComponentDemo";

export default function BadgeRankPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BadgeRank</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui BadgeRank 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="gold" code={`<BadgeRank variant="gold" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeRank variant="gold" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="silver" code={`<BadgeRank variant="silver" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeRank variant="silver" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="bronze" code={`<BadgeRank variant="bronze" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeRank variant="bronze" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="default" code={`<BadgeRank variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <BadgeRank variant="default" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
