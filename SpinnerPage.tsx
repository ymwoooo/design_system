import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function SpinnerPage() {
  return (
    <ComponentPageTemplate
      title="Spinner"
      description="shadcn/ui Spinner 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="lg" code={`<div className="flex items-center gap-2"> <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" /> <span className="text-sm text-muted-foreground">로딩 중...</span> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <span className="text-sm text-muted-foreground">로딩 중...</span>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<div className="flex items-center gap-2"> <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" /> <span className="text-sm text-muted-foreground">로딩 중...</span> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <span className="text-sm text-muted-foreground">로딩 중...</span>
              </div>
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<div className="flex items-center gap-2"> <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" /> <span className="text-sm text-muted-foreground">로딩 중...</span> </div>`}>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <span className="text-sm text-muted-foreground">로딩 중...</span>
              </div>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
