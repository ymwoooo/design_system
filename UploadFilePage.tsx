import { UploadFile } from "../../components/ui/upload-file";
import ComponentDemo from "../../components/ComponentDemo";

export default function UploadFilePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">UploadFile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui UploadFile 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="UploadFile" code={`<UploadFile />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadFile />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
