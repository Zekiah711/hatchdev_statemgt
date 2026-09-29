
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserPage = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className="space-y-6">
      <div className="bg-[#181a1f] border border-gray-800/60 rounded-2xl p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-gray-400 mt-1">Welcome back, {user.name || 'User'}. Your AI workspace is ready.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#181a1f] border border-gray-800/60 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-gray-300 mb-2">Account Details</h3>
          <p className="text-sm text-gray-400">Email: <span className="text-white">{user.email || 'N/A'}</span></p>
        </div>
        <div className="bg-[#181a1f] border border-gray-800/60 rounded-2xl p-6">
          <h3 className="text-sm font-medium text-gray-300 mb-2">System Status</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-emerald-400 font-medium">Connected to Redux Store</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage