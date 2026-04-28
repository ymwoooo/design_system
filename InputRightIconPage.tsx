import { InputRightIcon } from "../../components/ui/input-right-icon";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputRightIconPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputRightIcon</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputRightIcon 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="text" code={`<InputRightIcon variant="text" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputRightIcon variant="text" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="image" code={`<InputRightIcon variant="image" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputRightIcon variant="image" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
