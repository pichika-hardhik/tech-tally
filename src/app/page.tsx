import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white items-center">
      <main className="flex-1 p-2 flex justify-center items-center">
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl">
          <h1 className="text-3xl font-bold">
            Tech Tally
          </h1>

          <div className="flex items-center gap-4 mb-4 justify-center mt-6">
            <Link href="/signup" className="text-zinc-400 text-sm hover:text-white hover:font-medium">
              Signup
            </Link>
            <Link href="/login" className="text-zinc-400 text-sm hover:text-white hover:font-medium">
              Login
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}