import { Home, MessageCircle, Phone, Search, User } from 'lucide-react';

export default function NavBar({ activeTab, onChangeTab }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400" />
          <span className="font-semibold tracking-tight text-slate-900">Social Fusion</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => onChangeTab('feed')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
              activeTab === 'feed' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Home size={18} /> Feed
          </button>
          <button
            onClick={() => onChangeTab('chats')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
              activeTab === 'chats' ? 'bg-slate-900 text-white' : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <MessageCircle size={18} /> Chats
          </button>
          <button disabled className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-400 cursor-not-allowed">
            <Phone size={18} /> Calls
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-56 rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
          </div>
          <button className="h-9 w-9 grid place-items-center rounded-xl border border-slate-200 hover:bg-slate-50">
            <User size={18} />
          </button>
        </div>
      </div>

      <div className="md:hidden border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-2">
          <button
            onClick={() => onChangeTab('feed')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm ${
              activeTab === 'feed' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <Home size={18} /> Feed
          </button>
          <button
            onClick={() => onChangeTab('chats')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm ${
              activeTab === 'chats' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            <MessageCircle size={18} /> Chats
          </button>
          <button disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-400 border border-slate-200">
            <Phone size={18} /> Calls
          </button>
        </div>
      </div>
    </header>
  );
}
