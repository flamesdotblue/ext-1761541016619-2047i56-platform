import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative w-full" style={{ height: '420px' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

      <div className="relative h-full flex items-end md:items-center">
        <div className="p-6 md:p-10 w-full md:max-w-xl">
          <div className="pointer-events-none select-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              All your socials, chats, and calls in one playful space
            </h1>
            <p className="mt-3 text-slate-600">
              Scroll, share, and chat effortlessly. A vibrant blend of Instagram posts, WhatsApp style messaging, and IMO vibes.
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            <button className="pointer-events-auto rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">
              Get Started
            </button>
            <button className="pointer-events-auto rounded-xl bg-white text-slate-900 px-5 py-2.5 text-sm font-medium border border-slate-200 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
