import { CardTrace } from "../../components/ui/card-trace";
import ComponentDemo from "../../components/ComponentDemo";

export default function CardTracePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardTrace</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui CardTrace 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="CardTrace" code={`<CardTrace />`}>
          <div className="flex flex-wrap items-center gap-4">
            <CardTrace />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
