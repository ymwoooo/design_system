import { InputOtp } from "../../components/ui/input-otp";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputOtpPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputOtp</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputOtp 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="InputOtp" code={`<InputOtp />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputOtp />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
