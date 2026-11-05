import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type WebhookPayload = {
    tags: string[];
};

export async function POST(req: NextRequest) {
    try {
        if (!process.env.SANITY_REVALIDATE_SECRET) {
            console.error(
                "Missing environment variable SANITY_REVALIDATE_SECRET",
            );
            return NextResponse.json(
                { error: "Revalidation is not configured" },
                { status: 500 },
            );
        }

        const { isValidSignature, body } = await parseBody<WebhookPayload>(
            req,
            process.env.SANITY_REVALIDATE_SECRET,
            true,
        );

        if (!isValidSignature) {
            return NextResponse.json(
                { error: "Invalid signature" },
                { status: 401 },
            );
        }

        if (!Array.isArray(body?.tags) || !body.tags.length) {
            return NextResponse.json({ error: "Bad Request" }, { status: 400 });
        }

        for (const tag of body.tags) {
            revalidateTag(tag, {});
        }

        return NextResponse.json({ body });
    } catch (err) {
        console.error("Error revalidating tags", err);
        return NextResponse.json(
            { error: "Failed to revalidate tags" },
            { status: 500 },
        );
    }
}
