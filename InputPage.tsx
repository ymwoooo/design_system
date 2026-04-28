import { ComponentDemo } from "../../components/ComponentDemo";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import PageHeader from "../../components/PageHeader";

export default function InputPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PageHeader
        category="Components"
        title="Input"
        description="사용자로부터 텍스트 입력을 받는 인풋 컴포넌트입니다."
      />

      <div className="w-full px-[36px] pb-[60px]">
        <ComponentDemo
          title="기본 Input"
          description="기본 스타일의 인풋 필드입니다."
          code={`<Input placeholder="이메일을 입력하세요" />`}
        >
          <div className="w-full max-w-sm">
            <Input placeholder="이메일을 입력하세요" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Label과 함께"
          description="Label 컴포넌트와 함께 사용하는 인풋입니다."
          code={`<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="비활성화 상태"
          description="disabled 속성으로 인풋을 비활성화할 수 있습니다."
          code={`<Input disabled placeholder="Disabled" />`}
        >
          <div className="w-full max-w-sm">
            <Input disabled placeholder="Disabled" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="다양한 타입"
          description="다양한 타입의 인풋을 사용할 수 있습니다."
          code={`<div className="w-full max-w-sm space-y-4">
  <Input type="text" placeholder="Text" />
  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Password" />
  <Input type="number" placeholder="Number" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-4">
            <Input type="text" placeholder="Text" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="number" placeholder="Number" />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}