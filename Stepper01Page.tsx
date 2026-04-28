import { Stepper01 } from "../../components/ui/stepper01";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function Stepper01Page() {
  return (
    <ComponentPageTemplate
      title="Stepper"
      description="shadcn/ui Stepper01 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="lg" code={`<Stepper01 variant="lg" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Stepper01 variant="lg" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="sm" code={`<Stepper01 variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Stepper01 variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<Stepper01 variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Stepper01 variant="md" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
