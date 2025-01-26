"use client"

import { useState } from "react"
import Image from "next/image"

export default function VotingComponent({ isModalOpen, setIsModalOpen }) {
  const [votes, setVotes] = useState({ a: 0, b: 0 })
  const [images, setImages] = useState({ a: "/placeholder.svg", b: "/placeholder.svg" })
  const [newQuestion, setNewQuestion] = useState("")
  const [optionA, setOptionA] = useState("")
  const [optionB, setOptionB] = useState("")

  const handleVote = (option) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }))
  }
   
  const handleImageUpload = (option, e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImages((prev) => ({ ...prev, [option]: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    console.log("새 질문:", newQuestion, "옵션 A:", optionA, "옵션 B:", optionB)
    setIsModalOpen(false)
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">투표하기</h2>
      <div className="flex justify-between">
        <div className="w-1/2 p-4 border rounded">
          <h3 className="text-xl mb-2">옵션 A</h3>
          <Image src={images.a || "/placeholder.svg"} alt="Option A" width={200} height={200} className="mb-2" />
          <input type="file" onChange={(e) => handleImageUpload("a", e)} className="mb-2" />
          <button
            onClick={() => handleVote("a")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            투표하기 (A)
          </button>
          <p className="mt-2">투표 수: {votes.a}</p>
        </div>
        <div className="w-1/2 p-4 border rounded">
          <h3 className="text-xl mb-2">옵션 B</h3>
          <Image src={images.b || "/placeholder.svg"} alt="Option B" width={200} height={200} className="mb-2" />
          <input type="file" onChange={(e) => handleImageUpload("b", e)} className="mb-2" />
          <button
            onClick={() => handleVote("b")}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            투표하기 (B)
          </button>
          <p className="mt-2">투표 수: {votes.b}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h3 className="text-xl mb-4">새 질문 추가</h3>
            <input
              type="text"
              placeholder="질문 입력..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="옵션 A 입력..."
              value={optionA}
              onChange={(e) => setOptionA(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <input
              type="text"
              placeholder="옵션 B 입력..."
              value={optionB}
              onChange={(e) => setOptionB(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                저장
              </button>
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

