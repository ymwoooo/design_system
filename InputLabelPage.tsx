import { InputLabel } from "../../components/ui/input-label";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputLabelPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputLabel</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputLabel 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<InputLabel variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputLabel variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<InputLabel variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputLabel variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
