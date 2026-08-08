import { draftMode } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    (await draftMode()).disable();

    const origin = request.nextUrl.origin;
    try {
        const redirect = new URL(
            request.headers.get("referer") ?? origin,
            origin,
        );
        if (redirect.origin !== origin) {
            throw new Error();
        }

        return NextResponse.redirect(redirect);
    } catch {
        // referer inneholder en feil eller peker på et annet nettsted
        // faller tilbake til forsiden
        return NextResponse.redirect(new URL("/", origin));
    }
}
