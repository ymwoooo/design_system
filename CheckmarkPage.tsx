import { Checkmark } from "../../components/ui/checkmark";
import ComponentDemo from "../../components/ComponentDemo";

export default function CheckmarkPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Checkmark</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Checkmark 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="md" code={`<Checkmark variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Checkmark variant="md" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<Checkmark variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Checkmark variant="sm" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
