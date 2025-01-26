export interface VoteQuestion {
  id: string
  question: string
  optionA: {
    text: string
    image: string
    votes: number
  }
  optionB: {
    text: string
    image: string
    votes: number
  }
}

export const dummyQuestions: VoteQuestion[] = [
  {
    id: "1",
    question: "고양이와 강아지 중 어느 것이 더 좋은 반려동물인가요?",
    optionA: {
      text: "고양이",
      image: "/placeholder.svg?height=200&width=200&text=Cat",
      votes: 15,
    },
    optionB: {
      text: "강아지",
      image: "/placeholder.svg?height=200&width=200&text=Dog",
      votes: 20,
    },
  },
  {
    id: "2",
    question: "여름 휴가로 산과 바다 중 어디를 선호하시나요?",
    optionA: {
      text: "산",
      image: "/placeholder.svg?height=200&width=200&text=Mountain",
      votes: 10,
    },
    optionB: {
      text: "바다",
      image: "/placeholder.svg?height=200&width=200&text=Sea",
      votes: 25,
    },
  },
  // 더 많은 더미 데이터를 추가할 수 있습니다.
]

