import { InputOtpItem } from "../../components/ui/input-otp-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputOtpItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputOtpItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputOtpItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="placeholder" code={`<InputOtpItem variant="placeholder" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="placeholder" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="done" code={`<InputOtpItem variant="done" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="done" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="focused" code={`<InputOtpItem variant="focused" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="focused" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="disabled" code={`<InputOtpItem variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="disabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="readonly" code={`<InputOtpItem variant="readonly" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="readonly" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="error" code={`<InputOtpItem variant="error" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtpItem variant="error" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
