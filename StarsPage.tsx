import { Stars } from "../../components/ui/stars";
import ComponentDemo from "../../components/ComponentDemo";

export default function StarsPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Stars</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Stars 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<Stars variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stars variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<Stars variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stars variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="lg" code={`<Stars variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Stars variant="lg" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
