import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import {
  Code2,
  Trophy,
  Target,
  Flame,
  Bell,
  Search
} from "lucide-react";

const stats = [
  {
    title: "Problems Solved",
    value: "248",
    description: "Across all platforms",
    icon: Code2,
  },
  {
    title: "Global Rank",
    value: "#124",
    description: "Among your friends",
    icon: Trophy,
  },
  {
    title: "Acceptance Rate",
    value: "72%",
    description: "Across all submissions",
    icon: Target,
  },
  {
    title: "Current Streak",
    value: "12 Days",
    description: "Keep the momentum",
    icon: Flame,
  },
];

export default async function Home() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if ( !user ) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      <Sidebar />

      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>
            <p className="text-zinc-400 mt-2">
              Here's your coding activity overview.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Search className="text-zinc-400" size={20}/>
            <Bell className="text-zinc-400" size={20}/>

            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
              H
            </div>
          </div>

        </header>

        <section>
          <h2 className="text-lg font-semibold mb-5">
            Your Statistics
          </h2>

          <div className="grid grid-cols-2 gap-5">

            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                key={stat.title}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-zinc-400 text-sm">
                      {stat.title}
                    </p>

                    <Icon className="text-3xl font-bold mb-2" size={20}/>
                  </div>

                  <h3 className="text-3xl font-bold mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-zinc-500 text-xs">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
