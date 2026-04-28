import { ComboChip } from "../../components/ui/combo-chip";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function ComboChipPage() {
  return (
    <ComponentPageTemplate
      title="Combo Chip"
      description="shadcn/ui ComboChip 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<ComboChip variant="sm" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ComboChip variant="sm" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<ComboChip variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ComboChip variant="md" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="lg" code={`<ComboChip variant="lg" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <ComboChip variant="lg" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
