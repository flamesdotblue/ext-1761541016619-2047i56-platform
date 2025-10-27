import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Feed from './components/Feed';
import Chats from './components/Chats';

export default function App() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <NavBar activeTab={activeTab} onChangeTab={setActiveTab} />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100">
          <Hero />
        </section>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'feed' && <Feed />}
            {activeTab === 'chats' && <Chats />}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Discover</h3>
              <p className="mt-1 text-sm text-slate-600">Trending creators and communities across social, chat, and calls.</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['travel', 'food', 'music', 'gaming', 'tech', 'art'].map((tag) => (
                  <button key={tag} className="text-xs rounded-full border border-slate-200 px-3 py-1 hover:bg-slate-50">#{tag}</button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">New Post</button>
                <button className="rounded-xl bg-slate-100 text-slate-900 px-4 py-2 text-sm hover:bg-slate-200">New Chat</button>
                <button className="rounded-xl bg-slate-100 text-slate-900 px-4 py-2 text-sm hover:bg-slate-200">Start Call</button>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Made with love • Inspired by Instagram + WhatsApp + IMO
      </footer>
    </div>
  );
}
