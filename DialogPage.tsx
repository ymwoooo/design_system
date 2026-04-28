import { ComponentDemo } from "../../components/ComponentDemo";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import PageHeader from "../../components/PageHeader";

export default function DialogPage() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <PageHeader
        category="Components"
        title="Dialog"
        description="사용자와 상호작용하는 모달 다이얼로그 컴포넌트입니다."
      />

      <div className="w-full px-[36px] pb-[60px]">
        <ComponentDemo
          title="기본 Dialog"
          description="기본 스타일의 다이얼로그입니다. 버튼을 클릭해보세요."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>This action cannot be undone.</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </ComponentDemo>

        <ComponentDemo
          title="폼이 포함된 Dialog"
          description="입력 폼이 포함된 다이얼로그입니다."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Username</Label>
                  <Input id="username" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentDemo>
      </div>
    </div>
  );
}
