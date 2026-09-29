
import UserProfile from './UserProfile'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <aside className="h-screen w-64 bg-[#111317] border-r border-gray-800/60 text-gray-300 flex flex-col justify-between p-4 shrink-0">
      {/* Top Branding & Profile */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
            <img src="/lg.jpg" alt="" />
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">Girlmini AI</span>
        </div>

        <div className="p-3 bg-[#181a1f] border border-gray-800/50 rounded-xl">
          <UserProfile />
        </div>

        {/* Navigation links placeholder */}
        <nav className="space-y-1 text-sm">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#181a1f] text-white font-medium transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Dashboard
          </a>
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="pt-4 border-t border-gray-800/50">
        <button 
          onClick={handleLogout} 
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent hover:bg-red-500/10 text-gray-400 hover:text-red-400 text-sm font-medium rounded-xl transition-all border border-transparent hover:border-red-500/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar