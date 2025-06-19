import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { defineLive } from "next-sanity";

export const { sanityFetch, SanityLive } = defineLive({
    client,
    browserToken: token,
    serverToken: token,
});
