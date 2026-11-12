"use client";

import { createClient } from "@/lib/supabase/client";

export default function LogoutButton() {
    async function handleLogout() {
        const supabase = createClient();

        const {error} = await supabase.auth.signOut();

        if (error) {
            console.error(error.message);
            return;
        }

        window.location.href = "/";
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}