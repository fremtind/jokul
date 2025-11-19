import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type WebhookPayload = {
    tags: string[];
};

export async function POST(req: NextRequest) {
    try {
        if (!process.env.SANITY_REVALIDATE_SECRET) {
            return new Response(
                "Missing environment variable SANITY_REVALIDATE_SECRET",
                { status: 500 },
            );
        }

        const { isValidSignature, body } = await parseBody<WebhookPayload>(
            req,
            process.env.SANITY_REVALIDATE_SECRET,
            true,
        );

        if (!isValidSignature) {
            const message = "Invalid signature";
            return new Response(
                JSON.stringify({ message, isValidSignature, body }),
                {
                    status: 401,
                },
            );
        }

        if (!Array.isArray(body?.tags) || !body.tags.length) {
            const message = "Bad Request";
            return new Response(JSON.stringify({ message, body }), {
                status: 400,
            });
        }

        for (const tag of body.tags) {
            revalidateTag(tag, {});
        }

        return NextResponse.json({ body });
    } catch (err) {
        console.error(err);
        return new Response((err as Error).message, { status: 500 });
    }
}
