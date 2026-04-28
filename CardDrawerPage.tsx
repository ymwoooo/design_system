import { CardDrawer } from "../../components/ui/card-drawer";
import ComponentDemo from "../../components/ComponentDemo";

export default function CardDrawerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardDrawer</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CardDrawer 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="red" code={`<CardDrawer variant="red" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardDrawer variant="red" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="yellow" code={`<CardDrawer variant="yellow" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardDrawer variant="yellow" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
