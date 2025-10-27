import { Send } from 'lucide-react';
import { useState } from 'react';

const sampleChats = [
  { id: 1, name: 'Ava', last: 'Meet at 6?', time: '2m', unread: 2, color: 'from-fuchsia-500 to-pink-500' },
  { id: 2, name: 'Milo', last: 'Photos look great!', time: '12m', unread: 0, color: 'from-amber-400 to-orange-500' },
  { id: 3, name: 'Team', last: 'Call in 10', time: '1h', unread: 5, color: 'from-blue-500 to-cyan-400' },
  { id: 4, name: 'Family', last: 'Dinner tonight', time: '3h', unread: 0, color: 'from-emerald-500 to-teal-400' },
];

export default function Chats() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, from: 'them', text: 'Hey! Ready for the weekend?' },
    { id: 2, from: 'me', text: 'Absolutely, let’s plan something fun.' },
  ]);

  const sendMessage = () => {
    const text = message.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: Date.now(), from: 'me', text }]);
    setMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200">
          <input
            type="text"
            placeholder="Search chats"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
          />
        </div>
        <ul className="divide-y divide-slate-200 max-h-[460px] overflow-y-auto">
          {sampleChats.map((c) => (
            <li key={c.id} className="flex items-center gap-3 p-4 hover:bg-slate-50 cursor-pointer">
              <div className={`h-10 w-10 rounded-full bg-gradient-to-tr ${c.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm truncate">{c.name}</span>
                  <span className="text-xs text-slate-500">{c.time}</span>
                </div>
                <div className="text-xs text-slate-600 truncate">{c.last}</div>
              </div>
              {c.unread > 0 && (
                <span className="ml-auto text-xs rounded-full bg-slate-900 text-white px-2 py-0.5">{c.unread}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400" />
          <div>
            <div className="text-sm font-semibold">Ava</div>
            <div className="text-xs text-slate-500">online</div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-slate-50">
          {messages.map((m) => (
            <div key={m.id} className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${m.from === 'me' ? 'ml-auto bg-slate-900 text-white' : 'bg-white border border-slate-200'}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
              placeholder="Type a message"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button
              onClick={sendMessage}
              className="h-10 w-10 grid place-items-center rounded-xl bg-slate-900 text-white hover:bg-slate-800"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
