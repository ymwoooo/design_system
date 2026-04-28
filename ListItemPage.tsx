import { ListItem } from "../../components/ui/list-item";
import ComponentDemo from "../../components/ComponentDemo";

export default function ListItemPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ListItem</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui ListItem 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="lg" code={`<ListItem variant="lg" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="lg" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<ListItem variant="sm" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="sm" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="fill" code={`<ListItem variant="fill" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="fill" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="hug" code={`<ListItem variant="hug" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="hug" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="not yet" code={`<ListItem variant="not yet" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="not yet" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="done" code={`<ListItem variant="done" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="done" />
          </div>
        </ComponentDemo>

        <ComponentDemo title="in progress" code={`<ListItem variant="in progress" />`}>
          <div className="flex flex-wrap items-center gap-4">
            <ListItem variant="in progress" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
