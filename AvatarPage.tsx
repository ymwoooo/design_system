import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import ComponentDemo from "../../components/ComponentDemo";

export default function AvatarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Avatar</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          shadcn/ui Avatar 컴포넌트 예시
        </p>
      </div>

      <div className="space-y-6">
        <ComponentDemo title="Avatar" code={`<Avatar> <AvatarImage src="https://github.com/shadcn.png" alt="avatar" /> <AvatarFallback>CN</AvatarFallback> </Avatar>`}>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
