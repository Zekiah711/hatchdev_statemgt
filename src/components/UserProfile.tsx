
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className="flex items-center gap-3 w-full">
      {user.name && user.email ? (
        <>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="overflow-hidden text-left">
            <p className="text-sm font-medium text-gray-200 truncate">{user.name}</p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
        </>
      ) : (
        <div className="text-xs text-gray-500 italic">Guest Session</div>
      )}
    </div>
  )
}

export default UserProfile