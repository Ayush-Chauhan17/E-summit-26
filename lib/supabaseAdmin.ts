import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client using the service role key.
// Ensure you set the following env vars in .env.local (do NOT expose service role to the client):
// - NEXT_PUBLIC_SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY

export function getSupabaseAdmin() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
        throw new Error("Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
    }

    return createClient(url, serviceRoleKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });
}

export type StartupJunctionRegistration = {
    id?: string;
    created_at?: string;
    name: string;
    email: string;
    startup_name: string;
    phone: string;
    ticket_count: number;
    attachment_path?: string | null;
    event_key: string; // e.g., 'startup_junction_2025_12_06_1500_ist'
};
