import { CardBadge } from "../../components/ui/card-badge";
import ComponentDemo from "../../components/ComponentDemo";

export default function CardBadgePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardBadge</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CardBadge 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="new" code={`<CardBadge variant="new" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardBadge variant="new" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="selected" code={`<CardBadge variant="selected" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardBadge variant="selected" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="done" code={`<CardBadge variant="done" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardBadge variant="done" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="in progress" code={`<CardBadge variant="in progress" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardBadge variant="in progress" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="not yet" code={`<CardBadge variant="not yet" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardBadge variant="not yet" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
