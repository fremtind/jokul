import Studio from "../Studio";

export default async function StudioPage() {
    return (
        <Studio
            projectId={process.env.SANITY_PROJECT_ID || ""}
            dataset={process.env.SANITY_DATASET || "test"}
        />
    );
}
