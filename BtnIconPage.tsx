import { BtnIcon } from "../../components/ui/btn-icon";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function BtnIconPage() {
  return (
    <ComponentPageTemplate
      title="Button Icon"
      description="shadcn/ui BtnIcon 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="circle" code={`<BtnIcon variant="circle" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <BtnIcon variant="circle" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="square" code={`<BtnIcon variant="square" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <BtnIcon variant="square" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="BtnIcon" code={`<BtnIcon />`}>
            <div className="flex flex-wrap items-center gap-4">
              <BtnIcon />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
