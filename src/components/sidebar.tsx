"use client";
import { useState } from "react";

import {
  LayoutDashboard,
  Trophy,
  Code2,
  Users,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import LogoutButton from "@/components/logout-button";

const navigation = [
  { name: "Overview", icon: LayoutDashboard, id: 0 },
  { name: "Leaderboard", icon: Trophy, id: 1 },
  { name: "Problems", icon: Code2, id: 2 },
  { name: "Friends", icon: Users, id: 3 },
  { name: "Settings", icon: Settings, id: 4 },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const [page, setPage] = useState(0);
  function handlePage(id: number) {
    setPage(id);
  }

  return (
    <aside
      className={`flex flex-col ${isOpen ? "w-55" : "w-20"} h-screen bg-background border-r border-primary-700 p-5`}
    >
      <div
        className={`flex ${isOpen ? "justify-between mb-10" : "justify-center mb-20"}`}
      >
        {isOpen && <h1 className="font-extrabold text-accent">{"</>"}</h1>}
        {isOpen && <h1 className="text-xl font-bold text-white">Tech Tally</h1>}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium text-sm"
        >
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </button>
      </div>

      {isOpen && (
        <div className="font-light text-text-400 text-sm ml-2.5 mb-4">
          <p>Your Workspace</p>
        </div>
      )}

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer text-text ${page == item.id ? "bg-secondary-800" : "hover:font-medium"}`}
              onClick={() => handlePage(item.id)}
            >
              <Icon size={19} className="shrink-0" />
              {isOpen && <span>{item.name}</span>}
            </div>
          );
        })}
      </nav>

      <div className="flex text-red-400 mt-auto mb-8 justify-center">
        {isOpen && <LogoutButton />}
      </div>
    </aside>
  );
}
