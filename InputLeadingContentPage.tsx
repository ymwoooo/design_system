import { InputLeadingContent } from "../../components/ui/input-leading-content";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputLeadingContentPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputLeadingContent</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputLeadingContent 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="InputLeadingContent" code={`<InputLeadingContent />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputLeadingContent />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
