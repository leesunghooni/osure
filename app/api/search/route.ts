import { NextResponse } from "next/server"

// 이 부분은 실제 데이터베이스나 외부 API와 연동해야 합니다.
const mockQuestions = [
  { id: 1, question: "당신이 선호하는 프로그래밍 언어는?" },
  { id: 2, question: "커피와 차 중 어떤 것을 더 좋아하시나요?" },
  { id: 3, question: "여름과 겨울 중 어느 계절을 더 좋아하시나요?" },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const term = searchParams.get("term")

  if (!term) {
    return NextResponse.json([])
  }

  const results = mockQuestions.filter((q) => q.question.toLowerCase().includes(term.toLowerCase()))

  return NextResponse.json(results)
}

