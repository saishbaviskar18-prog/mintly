import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <div className="text-center mb-14">
          <div className="text-7xl mb-6">☕</div>

          <h1 className="text-5xl font-bold">
            Project Tap
          </h1>

          <p className="mt-3 text-gray-400">
            Smart NFC Loyalty & Payment Platform
          </p>
        </div>

        <Link
          href="/pay"
          className="block w-full bg-zinc-900 border border-yellow-500 rounded-2xl py-6 text-xl font-semibold text-center hover:bg-zinc-800 transition mb-5"
        >
          💳 Pay Now
        </Link>

        <Link
          href="/rewards"
          className="block w-full bg-zinc-900 border border-yellow-500 rounded-2xl py-6 text-xl font-semibold text-center hover:bg-zinc-800 transition"
        >
          ⭐ My Rewards
        </Link>

      </div>
    </main>
  );
}