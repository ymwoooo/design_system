import { ModalWebItem } from "../../components/ui/modal-web-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ModalWebItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ModalWebItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ModalWebItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<ModalWebItem variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ModalWebItem variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<ModalWebItem variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ModalWebItem variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
