import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import ComponentDemo from "../../components/ComponentDemo";

export default function TabsPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tabs</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Tabs 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="md" code={`<Tabs defaultValue="tab1" className="w-80"> <TabsList> <TabsTrigger value="tab1">탭 1</TabsTrigger> <TabsTrigger value="tab2">탭 2</TabsTrigger> </TabsList> <TabsContent value="tab1">탭 1 콘텐츠</TabsContent> <TabsContent value="tab2">탭 2 콘텐츠</TabsContent> </Tabs>`}>
          <div className="flex flex-wrap items-center gap-4">
            <Tabs defaultValue="tab1" className="w-80">
          <TabsList>
            <TabsTrigger value="tab1">탭 1</TabsTrigger>
            <TabsTrigger value="tab2">탭 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">탭 1 콘텐츠</TabsContent>
          <TabsContent value="tab2">탭 2 콘텐츠</TabsContent>
        </Tabs>
          </div>
        </ComponentDemo>

        <ComponentDemo title="sm" code={`<Tabs defaultValue="tab1" className="w-80"> <TabsList> <TabsTrigger value="tab1">탭 1</TabsTrigger> <TabsTrigger value="tab2">탭 2</TabsTrigger> </TabsList> <TabsContent value="tab1">탭 1 콘텐츠</TabsContent> <TabsContent value="tab2">탭 2 콘텐츠</TabsContent> </Tabs>`}>
          <div className="flex flex-wrap items-center gap-4">
            <Tabs defaultValue="tab1" className="w-80">
          <TabsList>
            <TabsTrigger value="tab1">탭 1</TabsTrigger>
            <TabsTrigger value="tab2">탭 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">탭 1 콘텐츠</TabsContent>
          <TabsContent value="tab2">탭 2 콘텐츠</TabsContent>
        </Tabs>
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
