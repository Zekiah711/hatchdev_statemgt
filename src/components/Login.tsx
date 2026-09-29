import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      dispatch(setUser({ name, email }))
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0e0f12] text-gray-100 px-4">
      <div className="w-full max-w-md bg-[#181a1f] border border-gray-800/80 rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
        
        {/* Header / Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white font-bold text-xl mb-4 shadow-lg shadow-blue-500/20">
            <img src="/lg.jpg" alt="Girlmini logo" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">Welcome Back</h1>
          <p className="text-sm text-gray-400 mt-1">Sign in to continue to your GirlminiAI dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-2" htmlFor="name">
              Full Name
            </label>
            <input 
              id="name" 
              name="name" 
              value={name} 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="e.g. Alex Morgan" 
              className="w-full px-4 py-3 bg-[#111317] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              id="email" 
              name="email" 
              value={email} 
              type="email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="name@example.com" 
              className="w-full px-4 py-3 bg-[#111317] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login