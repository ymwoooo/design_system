import { InputGrey } from "../../components/ui/input-grey";
import ComponentDemo from "../../components/ComponentDemo";

export default function InputGreyPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InputGrey</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui InputGrey 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="placeholder" code={`<InputGrey variant="placeholder" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputGrey variant="placeholder" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="activated" code={`<InputGrey variant="activated" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputGrey variant="activated" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="focused" code={`<InputGrey variant="focused" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputGrey variant="focused" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="disabled" code={`<InputGrey variant="disabled" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <InputGrey variant="disabled" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
