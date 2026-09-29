
const Navbar = () => {
  return (
    <header className="h-16 bg-[#0e0f12]/80 backdrop-blur-md border-b border-gray-800/60 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-medium text-gray-300">Workspace / <span className="text-white font-semibold">Overview</span></h2>
      </div>
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
          v1.0 Pro
        </span>
      </div>
    </header>
  )
}

export default Navbar