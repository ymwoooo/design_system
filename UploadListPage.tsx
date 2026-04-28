import { UploadList } from "../../components/ui/upload-list";
import ComponentDemo from "../../components/ComponentDemo";

export default function UploadListPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">UploadList</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui UploadList 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="UploadList" code={`<UploadList />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadList />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
