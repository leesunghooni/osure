export default function SearchResults({ results }) {
  if (results.length === 0) return null

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">검색 결과</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id} className="mb-2 p-2 border rounded">
            {result.question}
          </li>
        ))}
      </ul>
    </div>  
  )
}
    
