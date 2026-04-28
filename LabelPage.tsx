import { Label } from "../../components/ui/label";
import ComponentDemo from "../../components/ComponentDemo";

export default function LabelPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Label</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Label 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="true" code={`<Label>레이블 텍스트</Label>`}>
          <div className="flex flex-wrap items-center gap-4">
            <Label>레이블 텍스트</Label>
          </div>
        </ComponentDemo>

        <ComponentDemo title="false" code={`<Label>레이블 텍스트</Label>`}>
          <div className="flex flex-wrap items-center gap-4">
            <Label>레이블 텍스트</Label>
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
