"use client"

import { useState } from "react"
import VotingComponent from "@/components/VotingComponent"
import SearchResults from "@/components/SearchResults"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearch = async () => {
    const response = await fetch(`/api/search?term=${searchTerm}`)
    const data = await response.json()
    setSearchResults(data)
  }

  return (
    <main className="container mx-auto p-4">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="질문 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2 flex-grow"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          검색
        </button>
      </div>
      <div className="mb-4 flex justify-end">
        <button onClick={() => setIsModalOpen(true)} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          새로 만들기
        </button>
      </div>
      <SearchResults results={searchResults} />
      <VotingComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </main>
  )
}

