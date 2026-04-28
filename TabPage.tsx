import { Tab } from "../../components/ui/tab";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function TabPage() {
  return (
    <ComponentPageTemplate
      title="Tab"
      description="shadcn/ui Tab 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="text" code={`<Tab variant="text" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="text" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Pinned / Selected" code={`<Tab variant="pinned / selected" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="pinned / selected" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Pinned / Unselected" code={`<Tab variant="pinned / unselected" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="pinned / unselected" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="Unpinned / Selected" code={`<Tab variant="unpinned / selected" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <Tab variant="unpinned / selected" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
