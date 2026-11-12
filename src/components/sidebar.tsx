"use client";
import { useState } from "react";

import {
    LayoutDashboard,
    Trophy,
    Code2,
    Users,
    Settings,
    PanelLeftClose,
    PanelLeftOpen
} from "lucide-react";

import LogoutButton from "@/components/logout-button";

const navigation = [
    {name: "Overview", icon: LayoutDashboard},
    {name: "Leaderboard", icon: Trophy},
    {name: "Problems", icon: Code2},
    {name: "Friends", icon: Users},
    {name: "Settings", icon: Settings}
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={`flex flex-col ${isOpen ? "w-64" : "w-20"} h-screen bg-zinc-950 border-r border-zinc-800 p-5 transition-all duration-100`}>

            <div className={`flex ${isOpen ? "justify-between" : "justify-center"} mb-10`}>

                {isOpen && (<h1 className="text-xl font-bold text-white">
                    Tech Tally
                </h1>)}

                <button onClick={() => setIsOpen(!isOpen)} className="font-medium text-sm">
                    {isOpen? <PanelLeftClose /> : <PanelLeftOpen />}
                </button>
            </div>

            <nav className="space-y-2">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                        key={item.name}
                        className="flex items-center gap-3 p-3 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white cursor-pointer"
                        >
                            <Icon size={19} className="shrink-0"/>
                            {isOpen && (<span>{item.name}</span>)}
                        </div>
                    )
                })}
            </nav>

            <div className="flex text-red-400 mt-auto mb-8 justify-center">
                { isOpen && (<LogoutButton />) }
            </div>

        </aside>
    )
}