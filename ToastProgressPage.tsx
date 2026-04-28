import { ToastProgress } from "../../components/ui/toast-progress";
import ComponentDemo from "../../components/ComponentDemo";

export default function ToastProgressPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ToastProgress</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ToastProgress 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="success" code={`<ToastProgress variant="success" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastProgress variant="success" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="info" code={`<ToastProgress variant="info" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastProgress variant="info" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="warning" code={`<ToastProgress variant="warning" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastProgress variant="warning" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="error" code={`<ToastProgress variant="error" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastProgress variant="error" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="brand" code={`<ToastProgress variant="brand" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ToastProgress variant="brand" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
