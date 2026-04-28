import { UploadListItem } from "../../components/ui/upload-list-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function UploadListItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">UploadListItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui UploadListItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="uploading" code={`<UploadListItem variant="uploading" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadListItem variant="uploading" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="error" code={`<UploadListItem variant="error" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadListItem variant="error" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="done" code={`<UploadListItem variant="done" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadListItem variant="done" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="hover" code={`<UploadListItem variant="hover" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadListItem variant="hover" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="read-only" code={`<UploadListItem variant="read-only" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadListItem variant="read-only" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
