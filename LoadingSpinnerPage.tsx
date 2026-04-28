import { LoadingSpinner } from "../../components/ui/loading-spinner";
import ComponentDemo from "../../components/ComponentDemo";

export default function LoadingSpinnerPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">LoadingSpinner</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui LoadingSpinner 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="4" code={`<LoadingSpinner variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingSpinner variant="4" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3" code={`<LoadingSpinner variant="3" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingSpinner variant="3" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="2" code={`<LoadingSpinner variant="2" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingSpinner variant="2" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="1" code={`<LoadingSpinner variant="1" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingSpinner variant="1" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
