import Search from './components/Search'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">GitHub User Search</h1>
        <Search />
      </div>
    </div>
  )
}

export default App
