import { LoadingBar } from "../../components/ui/loading-bar";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function LoadingBarPage() {
  return (
    <ComponentPageTemplate
      title="Loading Bar"
      description="shadcn/ui LoadingBar 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="2" code={`<LoadingBar variant="2" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <LoadingBar variant="2" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="1" code={`<LoadingBar variant="1" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <LoadingBar variant="1" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
