import { Numbering } from "../../components/ui/numbering";
import ComponentDemo from "../../components/ComponentDemo";

export default function NumberingPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Numbering</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Numbering 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="yellow" code={`<Numbering variant="yellow" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Numbering variant="yellow" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="green" code={`<Numbering variant="green" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Numbering variant="green" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="red" code={`<Numbering variant="red" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Numbering variant="red" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="mint" code={`<Numbering variant="mint" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Numbering variant="mint" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="brand" code={`<Numbering variant="brand" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Numbering variant="brand" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
