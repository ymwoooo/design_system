import { ButtonWebItem } from "../../components/ui/button-web-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ButtonWebItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ButtonWebItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ButtonWebItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="sm" code={`<ButtonWebItem variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonWebItem variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="md" code={`<ButtonWebItem variant="md" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonWebItem variant="md" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
