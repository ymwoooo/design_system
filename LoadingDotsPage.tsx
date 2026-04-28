import { LoadingDots } from "../../components/ui/loading-dots";
import ComponentDemo from "../../components/ComponentDemo";

export default function LoadingDotsPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">LoadingDots</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui LoadingDots 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="6" code={`<LoadingDots variant="6" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="6" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="5" code={`<LoadingDots variant="5" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="5" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="4" code={`<LoadingDots variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="4" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3" code={`<LoadingDots variant="3" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="3" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="2" code={`<LoadingDots variant="2" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="2" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="1" code={`<LoadingDots variant="1" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <LoadingDots variant="1" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
