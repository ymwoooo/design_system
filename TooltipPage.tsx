import { ComponentDemo } from "../../components/ComponentDemo";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Button } from "../../components/ui/button";
import PageHeader from "../../components/PageHeader";

export default function TooltipPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PageHeader
        category="Components"
        title="Tooltip"
        description="요소에 마우스를 올리면 추가 정보를 표시하는 툴팁 컴포넌트입니다."
      />

      <div className="w-full px-[36px] pb-[60px]">
        <ComponentDemo
          title="기본 Tooltip"
          description="기본 스타일의 툴팁입니다. 버튼에 마우스를 올려보세요."
          code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentDemo>

        <ComponentDemo
          title="다양한 위치"
          description="툴팁의 위치를 조정할 수 있습니다."
          code={`<TooltipProvider>
  <div className="flex gap-4">
    <Tooltip>
      <TooltipTrigger asChild><Button>Top</Button></TooltipTrigger>
      <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild><Button>Bottom</Button></TooltipTrigger>
      <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild><Button>Left</Button></TooltipTrigger>
      <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild><Button>Right</Button></TooltipTrigger>
      <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`}
        >
          <TooltipProvider>
            <div className="flex gap-4 flex-wrap">
              <Tooltip>
                <TooltipTrigger asChild><Button>Top</Button></TooltipTrigger>
                <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button>Bottom</Button></TooltipTrigger>
                <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button>Left</Button></TooltipTrigger>
                <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button>Right</Button></TooltipTrigger>
                <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentDemo>
      </div>
    </div>
  );
}
