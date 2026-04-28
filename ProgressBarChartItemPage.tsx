import { ProgressBarChartItem } from "../../components/ui/progress-bar-chart-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ProgressBarChartItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressBarChartItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ProgressBarChartItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="0:100" code={`<ProgressBarChartItem variant="0:100" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="0:100" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="10:90" code={`<ProgressBarChartItem variant="10:90" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="10:90" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="20:80" code={`<ProgressBarChartItem variant="20:80" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="20:80" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="30:70" code={`<ProgressBarChartItem variant="30:70" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="30:70" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="40:60" code={`<ProgressBarChartItem variant="40:60" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="40:60" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="50:50" code={`<ProgressBarChartItem variant="50:50" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="50:50" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="60:40" code={`<ProgressBarChartItem variant="60:40" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="60:40" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="70:30" code={`<ProgressBarChartItem variant="70:30" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="70:30" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="80:20" code={`<ProgressBarChartItem variant="80:20" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="80:20" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="90:10" code={`<ProgressBarChartItem variant="90:10" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="90:10" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="100:0" code={`<ProgressBarChartItem variant="100:0" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="100:0" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="0" code={`<ProgressBarChartItem variant="0" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="0" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="1" code={`<ProgressBarChartItem variant="1" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="1" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="2" code={`<ProgressBarChartItem variant="2" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="2" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="3" code={`<ProgressBarChartItem variant="3" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="3" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="4" code={`<ProgressBarChartItem variant="4" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="4" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="5" code={`<ProgressBarChartItem variant="5" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ProgressBarChartItem variant="5" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
