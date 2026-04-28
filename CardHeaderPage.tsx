import { CardHeader } from "../../components/ui/card-header";
import ComponentDemo from "../../components/ComponentDemo";

export default function CardHeaderPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardHeader</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CardHeader 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="default" code={`<CardHeader variant="default" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardHeader variant="default" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="default_icon" code={`<CardHeader variant="default_icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardHeader variant="default_icon" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="toggle group" code={`<CardHeader variant="toggle group" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardHeader variant="toggle group" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="toggle group_icon" code={`<CardHeader variant="toggle group_icon" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardHeader variant="toggle group_icon" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
