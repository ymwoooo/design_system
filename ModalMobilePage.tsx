import { ModalMobile } from "../../components/ui/modal-mobile";
import ComponentDemo from "../../components/ComponentDemo";

export default function ModalMobilePage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ModalMobile</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ModalMobile 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="ModalMobile" code={`<ModalMobile />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ModalMobile />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
