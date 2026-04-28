import { ModalItemMobile } from "../../components/ui/modal-item-mobile";
import ComponentDemo from "../../components/ComponentDemo";

export default function ModalItemMobilePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ModalItemMobile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ModalItemMobile 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="title" code={`<ModalItemMobile variant="title" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ModalItemMobile variant="title" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="body" code={`<ModalItemMobile variant="body" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ModalItemMobile variant="body" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
