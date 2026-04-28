import { InputSupportingText } from "../../components/ui/input-supporting-text";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputSupportingTextPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputSupportingText</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputSupportingText 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="helper text" code={`<InputSupportingText variant="helper text" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputSupportingText variant="helper text" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="error" code={`<InputSupportingText variant="error" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputSupportingText variant="error" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="valid" code={`<InputSupportingText variant="valid" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputSupportingText variant="valid" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
