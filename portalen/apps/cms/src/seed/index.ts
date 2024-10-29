import type { Payload } from "..";
import { componentPagesSeed } from "./data";

export const seedComponentPages = async (payload: Payload) => {
    const { totalDocs } = await payload.find({
        collection: "components",
    });

    if (!totalDocs) {
        const componentPagesCreated = componentPagesSeed.map(async (componentPage) => {
            return payload.create({
                collection: "components",
                data: componentPage,
            });
        });

        Promise.all(componentPagesCreated).then(() => {
            payload.logger.info(`Succsessfully seeded Component pages into database`);
        });
    }
};

export const seedUsers = async (payload: Payload) => {
    const { totalDocs } = await payload.find({
        collection: "users",
    });

    if (!totalDocs) {
        await payload.create({
            collection: "users",
            data: {
                email: "dev@payloadcms.com",
                password: "qwerty",
                name: "Admin User",
                role: "admin",
            },
        });
        await payload.create({
            collection: "users",
            data: {
                email: "user@payloadcms.com",
                password: "qwerty",
                name: "Frontend User",
                role: "editor",
            },
        });
        payload.logger.info(`Successfully seeded Users into database`);
    }
};
