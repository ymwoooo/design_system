import { UploadBar } from "../../components/ui/upload-bar";
import ComponentDemo from "../../components/ComponentDemo";

export default function UploadBarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">UploadBar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui UploadBar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="enabled" code={`<UploadBar variant="enabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadBar variant="enabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="disabled" code={`<UploadBar variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadBar variant="disabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="focused" code={`<UploadBar variant="focused" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <UploadBar variant="focused" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
