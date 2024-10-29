import cms = require("@org/cms");
import { CronJob } from "cron";
import { parseISO } from "date-fns";
import stats from "download-stats";

const getPackageStats = async (
    packageName: string,
): Promise<{ package: string; downloads: number }> =>
    new Promise((resolve, reject) => {
        stats.get.lastMonth(
            `@fremtind/${packageName}`,
            (
                err: unknown,
                res: Partial<{ package: string; downloads: number }>,
            ) => {
                if (err) {
                    return reject(err);
                }
                if (!res?.package) {
                    return reject(`package ${packageName} not found`);
                }
                resolve({
                    package: res.package!,
                    downloads: res.downloads!,
                });
            },
        );
    });

export const packageStatsJob = (payload: cms.Payload) =>
    new CronJob(
        "0 0 5 * * 1",
        async () => {
            try {
                const allStats = await payload.find({
                    collection: "package-stats",
                });
                const components = await payload.find({
                    collection: "components",
                });

                for (const component of components.docs) {
                    const {
                        reactPackageName: packageName,
                        title,
                        id,
                    } = component;

                    if (!packageName) {
                        continue;
                    }

                    const componentStats = allStats.docs.find(
                        (d) => d.package === `@fremtind/${packageName}`,
                    );

                    const lastUpdated = componentStats?.updatedAt;

                    if (!lastUpdated) {
                        await payload.create({
                            collection: "package-stats",
                            data: {
                                ...(await getPackageStats(packageName)),
                                title,
                                componentId: id,
                            },
                        });
                        console.log(`Created stats for package ${packageName}`);
                    } else {
                        const ageInHours =
                            (Date.now() - parseISO(lastUpdated).getTime()) /
                            (60 * 60 * 1000);

                        if (ageInHours >= 23) {
                            const update = {
                                collection: "package-stats" as const,
                                id: componentStats.id,
                                data: {
                                    ...(await getPackageStats(packageName)),
                                    title,
                                    componentId: id,
                                },
                            };
                            await payload.update(update);
                            console.log(
                                `Updated stats for package ${packageName}`,
                            );
                        }
                    }
                }
            } catch (e) {
                console.error(`Fetching package stats failed: ${e}`);
            }
        },
        null,
        false,
        "Europe/Oslo",
        null,
        true,
    );
