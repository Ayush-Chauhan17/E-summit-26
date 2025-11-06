import { NextResponse } from "next/server";
import { getSupabaseAdmin, type StartupJunctionRegistration } from "@/lib/supabaseAdmin";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

// EXPECTED multipart/form-data fields:
// - name: string
// - email: string
// - startup_name: string
// - phone: string
// - ticket_count: number
// - attachment: File (optional)

const BUCKET = "startup-junction";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const startup_name = String(formData.get("startup_name") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const ticket_count_raw = String(formData.get("ticket_count") || "0").trim();
        const attachment = formData.get("attachment") as File | null;

        const ticket_count = Number.parseInt(ticket_count_raw, 10);

        if (!name || !email || !startup_name || !phone || !Number.isFinite(ticket_count) || ticket_count < 1) {
            return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
        }

        const event_key = "startup_junction_2025_12_06_1500_ist";

        // Upload file (if present) to Supabase Storage
        const supabase = getSupabaseAdmin();
        let attachment_path: string | null = null;

        if (attachment && typeof attachment.arrayBuffer === "function") {
            const fileBuffer = await attachment.arrayBuffer();
            const fileExt = attachment.name?.split(".").pop() || "bin";
            const objectPath = `uploads/${randomUUID()}.${fileExt}`;

            const { error: uploadError } = await supabase.storage.from(BUCKET).upload(objectPath, fileBuffer, {
                contentType: attachment.type || "application/octet-stream",
                upsert: false,
            });

            if (uploadError) {
                return NextResponse.json({ error: `File upload failed: ${uploadError.message}` }, { status: 500 });
            }

            attachment_path = objectPath;
        }

        const payload: StartupJunctionRegistration = {
            name,
            email,
            startup_name,
            phone,
            ticket_count,
            attachment_path,
            event_key,
        };

        const { data, error } = await supabase.from("startup_junction_registrations").insert(payload).select("*").single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true, data });
    } catch (err: any) {
        return NextResponse.json({ error: err?.message || "Unexpected error" }, { status: 500 });
    }
}
