import { ComponentDemo } from "../../components/ComponentDemo";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Terminal, AlertCircle, Info, CheckCircle2 } from "lucide-react";
import ComponentPageTemplate from "../../components/ComponentPageTemplate";

export default function AlertPage() {
  return (
    <ComponentPageTemplate
      title="Alert"
      description="사용자에게 중요한 정보를 전달하는 알림 컴포넌트입니다."
      example={
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ComponentDemo
            title="기본 Alert"
            description="기본 스타일의 알림입니다."
            code={`<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
          >
            <div className="w-full max-w-lg">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="Destructive Alert"
            description="경고나 오류를 표시하는 알림입니다."
            code={`<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
          >
            <div className="w-full max-w-lg">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </ComponentDemo>

          <ComponentDemo
            title="다양한 예시"
            description="다양한 상황에서의 알림 사용 예시입니다."
            code={`<div className="space-y-4">
  <Alert>
    <Info className="h-4 w-4" />
    <AlertTitle>정보</AlertTitle>
    <AlertDescription>새로운 기능이 추가되었습니다.</AlertDescription>
  </Alert>
  <Alert>
    <CheckCircle2 className="h-4 w-4" />
    <AlertTitle>성공</AlertTitle>
    <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
  </Alert>
</div>`}
          >
            <div className="w-full max-w-lg space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>정보</AlertTitle>
                <AlertDescription>새로운 기능이 추가되었습니다.</AlertDescription>
              </Alert>
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>성공</AlertTitle>
                <AlertDescription>변경사항이 저장되었습니다.</AlertDescription>
              </Alert>
            </div>
          </ComponentDemo>
        </div>
      }
    />
  );
}
