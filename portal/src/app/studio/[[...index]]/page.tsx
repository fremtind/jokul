import { Studio } from "../Studio";

export const dynamic = "force-dynamic";

export { metadata, viewport } from "next-sanity/studio";

export default async function StudioPage() {
    return <Studio />;
}
