import { ComponentDemo } from "../../components/ComponentDemo";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Label } from "../../components/ui/label";
import PageHeader from "../../components/PageHeader";

export default function SelectPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PageHeader
        category="Components"
        title="Select"
        description="사용자가 옵션 목록에서 하나를 선택할 수 있는 셀렉트 컴포넌트입니다."
      />

      <div className="w-full px-[36px] pb-[60px]">
        <ComponentDemo
          title="기본 Select"
          description="기본 스타일의 셀렉트입니다."
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        </ComponentDemo>

        <ComponentDemo
          title="Label과 함께"
          description="Label 컴포넌트와 함께 사용하는 셀렉트입니다."
          code={`<div className="space-y-2">
  <Label>과일 선택</Label>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="과일을 선택하세요" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">사과</SelectItem>
      <SelectItem value="banana">바나나</SelectItem>
      <SelectItem value="orange">오렌지</SelectItem>
      <SelectItem value="grape">포도</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="space-y-2">
            <Label>과일 선택</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="과일을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">사과</SelectItem>
                <SelectItem value="banana">바나나</SelectItem>
                <SelectItem value="orange">오렌지</SelectItem>
                <SelectItem value="grape">포도</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
