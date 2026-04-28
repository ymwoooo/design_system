import { SpinnerRound } from "../../components/ui/spinner-round";
import ComponentDemo from "../../components/ComponentDemo";

export default function SpinnerRoundPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SpinnerRound</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui SpinnerRound 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="1" code={`<SpinnerRound variant="1" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SpinnerRound variant="1" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="2" code={`<SpinnerRound variant="2" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SpinnerRound variant="2" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3" code={`<SpinnerRound variant="3" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SpinnerRound variant="3" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="4" code={`<SpinnerRound variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <SpinnerRound variant="4" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
