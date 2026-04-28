import { useState } from "react"
import { SplitButton } from "../../components/ui/split-button"
import ComponentDemo from "../../components/ComponentDemo"

type Tab = "guideline" | "example"

export default function SplitButtonPage() {
  const [tab, setTab] = useState<Tab>("guideline")

  const examples = [
    { title: "sm", code: `<SplitButton variant="sm" />`, preview: <SplitButton variant="sm" /> },
    { title: "md", code: `<SplitButton variant="md" />`, preview: <SplitButton variant="md" /> },
    { title: "lg", code: `<SplitButton variant="lg" />`, preview: <SplitButton variant="lg" /> },
  ] as const

  return (
    <div className="space-y-8 p-8">
      {/* Page header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Split button</h1>
        <p className="text-sm text-muted-foreground">
          1개의 버튼에 2개 이상의 선택지가 필요한 경우, 스플릿 버튼을 사용합니다.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex gap-6">
          <button
            type="button"
            onClick={() => setTab("guideline")}
            className={[
              "relative h-12 px-1 text-sm font-semibold",
              tab === "guideline" ? "text-foreground" : "text-muted-foreground",
            ].join(" ")}
          >
            Guideline
            {tab === "guideline" && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-foreground" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setTab("example")}
            className={[
              "relative h-12 px-1 text-sm font-semibold",
              tab === "example" ? "text-foreground" : "text-muted-foreground",
            ].join(" ")}
          >
            Example
            {tab === "example" && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      {tab === "guideline" ? (
        <div className="space-y-10">
          {/* Guidance text (Placement / usage) */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Usage</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
              <li>
                버튼에 2개 이상의 선택지가 필요한 경우, 기본 액션 + 보조 옵션을 함께 제공하기 위해 스플릿 버튼을 사용합니다.
              </li>
              <li>
                스플릿 버튼은 CTA 버튼의 한 유형으로, 핵심 액션을 의미하는 Primary 버튼 컬러를 사용합니다.
              </li>
              <li>
                페이지 헤더 우측 영역에 배치하여 주요 액션으로 인지되도록 합니다.
              </li>
            </ul>
          </section>

          {/* Preview demos (Guideline tab에는 프리뷰 포함) */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold">Preview</h2>

            {examples.map((ex) => (
              <ComponentDemo key={ex.title} title={ex.title} code={ex.code}>
                <div className="flex flex-wrap items-center gap-4">{ex.preview}</div>
              </ComponentDemo>
            ))}
          </section>

          {/* Do / Don't (텍스트만 간단히) */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold">Do / Don’t</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold text-green-700">Do</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  기본 액션(Primary)과 보조 옵션(Secondary)을 한 컴포넌트로 묶어 제공해야 할 때 사용합니다.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold text-red-700">Don’t</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  동일한 영역에 스플릿 버튼을 2개 이상 배치하여 주요 CTA가 분산되지 않도록 합니다.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Example tab: "코드만 보이게" (프리뷰 없음)
        <div className="space-y-6">
          {examples.map((ex) => (
            <ComponentDemo key={ex.title} title={ex.title} code={ex.code}>
              {/* Example 탭에서는 프리뷰를 숨기고 코드만 보여주기 */}
              <div className="hidden" />
            </ComponentDemo>
          ))}
        </div>
      )}
    </div>
  )
}

