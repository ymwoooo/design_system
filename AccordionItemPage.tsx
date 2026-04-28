import { AccordionItem } from "../../components/ui/accordion-item";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function AccordionItemPage() {
  return (
    <ComponentPageTemplate
      title="Accordion Item"
      description="shadcn/ui AccordionItem 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="md" code={`<AccordionItem variant="md" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <AccordionItem variant="md" />
            </div>
          </ComponentDemo>

          <ComponentDemo title="lg" code={`<AccordionItem variant="lg" />`}>
            <div className="flex flex-wrap items-center gap-4">
              <AccordionItem variant="lg" />
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
