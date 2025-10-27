import { Heart, MessageCircle, Send, MoreVertical } from 'lucide-react';

const stories = [
  { id: 1, name: 'You', color: 'from-sky-400 to-emerald-400', me: true },
  { id: 2, name: 'Ava', color: 'from-fuchsia-500 to-pink-500' },
  { id: 3, name: 'Milo', color: 'from-amber-400 to-orange-500' },
  { id: 4, name: 'Zee', color: 'from-blue-500 to-cyan-400' },
  { id: 5, name: 'Lia', color: 'from-emerald-500 to-teal-400' },
  { id: 6, name: 'Noah', color: 'from-violet-500 to-indigo-500' },
];

const posts = [
  {
    id: 1,
    user: 'Ava Studio',
    handle: '@ava',
    time: '2h',
    image:
      'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&w=1600&auto=format&fit=crop',
    caption: 'Golden hour, city vibes. #sunset #urban',
    likes: 128,
    comments: 24,
  },
  {
    id: 2,
    user: 'Milo Travels',
    handle: '@milo',
    time: '5h',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    caption: 'Waves for days. Anyone else missing the beach?',
    likes: 302,
    comments: 41,
  },
];

export default function Feed() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {stories.map((s) => (
            <button key={s.id} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={`h-16 w-16 rounded-full p-[3px] bg-gradient-to-tr ${s.color}`}>
                <div className="h-full w-full rounded-full bg-white grid place-items-center text-xs font-medium">
                  {s.me ? 'You' : s.name[0]}
                </div>
              </div>
              <span className="text-xs text-slate-600">{s.name}</span>
            </button>
          ))}
        </div>
      </div>

      {posts.map((post) => (
        <article key={post.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <header className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 to-sky-500" />
              <div>
                <div className="text-sm font-semibold">{post.user}</div>
                <div className="text-xs text-slate-500">{post.handle} • {post.time}</div>
              </div>
            </div>
            <button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-slate-50">
              <MoreVertical size={18} />
            </button>
          </header>
          <div className="aspect-[4/3] bg-slate-100">
            <img src={post.image} alt={post.caption} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3">
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-slate-50"><Heart size={18} /></button>
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-slate-50"><MessageCircle size={18} /></button>
              <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-slate-50"><Send size={18} /></button>
            </div>
            <div className="mt-2 text-sm text-slate-700">
              <span className="font-semibold mr-1">{post.likes} likes</span>
              {post.caption}
            </div>
            <button className="mt-1 text-sm text-slate-500 hover:text-slate-700">View all {post.comments} comments</button>
          </div>
        </article>
      ))}
    </div>
  );
}
