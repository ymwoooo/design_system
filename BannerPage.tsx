import { Banner } from "../../components/ui/banner";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function BannerPage() {
  return (
    <ComponentPageTemplate
      title="Banner"
      description="shadcn/ui Banner 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="alert" code={`<Banner variant="alert" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Banner variant="alert" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="warning" code={`<Banner variant="warning" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Banner variant="warning" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Brand light" code={`<Banner variant="brand light" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Banner variant="brand light" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Brand" code={`<Banner variant="brand" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Banner variant="brand" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
