import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import ComponentDemo from "../../components/ComponentDemo";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function CardPage() {
  return (
    <ComponentPageTemplate
      title="Card"
      description="shadcn/ui Card 컴포넌트 예시"
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo title="sm" code={`<Card className="w-72"> <CardHeader> <CardTitle>카드 제목</CardTitle> <CardDescription>카드 설명</CardDescription> </CardHeader> <CardContent> <p className="text-sm">카드 콘텐츠</p> </CardContent> </Card>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Card className="w-72">
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드 설명</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">카드 콘텐츠</p>
                </CardContent>
              </Card>
            </div>
          </ComponentDemo>

          <ComponentDemo title="md" code={`<Card className="w-72"> <CardHeader> <CardTitle>카드 제목</CardTitle> <CardDescription>카드 설명</CardDescription> </CardHeader> <CardContent> <p className="text-sm">카드 콘텐츠</p> </CardContent> </Card>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Card className="w-72">
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드 설명</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">카드 콘텐츠</p>
                </CardContent>
              </Card>
            </div>
          </ComponentDemo>

          <ComponentDemo title="lg" code={`<Card className="w-72"> <CardHeader> <CardTitle>카드 제목</CardTitle> <CardDescription>카드 설명</CardDescription> </CardHeader> <CardContent> <p className="text-sm">카드 콘텐츠</p> </CardContent> </Card>`}>
            <div className="flex flex-wrap items-center gap-4">
              <Card className="w-72">
                <CardHeader>
                  <CardTitle>카드 제목</CardTitle>
                  <CardDescription>카드 설명</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">카드 콘텐츠</p>
                </CardContent>
              </Card>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
