import { getPayload, Where } from "payload";
import { PropDocumentation } from "@/components/prop-documentation/PropDocumentation";
import { RichText } from "@/components/rich-text";
import configPromise from "@/payload.config";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const payload = await getPayload({
        config: configPromise,
    });

    const slug = (await params).slug;

    const query: Where = {
        slug: {
            equals: slug,
        },
    };

    const data = await payload.find({
        collection: "component-page",
        where: query,
    });

    return (
        <>
            <div>Hei jeg er {data.docs?.[0]?.title || "ikke i databasen"}</div>

            {data.docs[0]?.content && (
                <RichText data={data.docs[0].content}></RichText>
            )}

            {data.docs?.[0]?.["component-folder"] && (
                <PropDocumentation
                    component={data.docs[0]?.["component-folder"]}
                />
            )}
        </>
    );
}
