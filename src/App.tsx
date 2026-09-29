
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'

const App = () => {
  const user = useSelector((state: RootState) => state.user)

  // If user is not logged in, show the minimalist Login screen
  if (!user.name || !user.email) {
    return <Login />
  }

  // Once logged in, show the Gemini-style App Layout
  return (
    <div className="flex h-screen bg-[#0e0f12] text-gray-100 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Navbar />
        <main className="p-8 max-w-6xl w-full mx-auto">
          <UserPage />
        </main>
      </div>
    </div>
  )
}

export default App