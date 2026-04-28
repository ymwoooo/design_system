import { ToastMobile } from "../../components/ui/toast-mobile";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToastMobilePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToastMobile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToastMobile 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ToastMobile" code={`<ToastMobile />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastMobile />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
