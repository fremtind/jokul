// Gir overskrifter i markdown en id, slik at lenker som `#jøkul-60` i
// MIGRATION.md fungerer. Følger samme regler som GitHub.
const slugify = (tekst) =>
    tekst
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}\p{N}\s-]/gu, "")
        .replace(/\s/g, "-");

const tekstFra = (node) =>
    node.type === "text"
        ? node.value
        : (node.children ?? []).map(tekstFra).join("");

const besok = (node, fn) => {
    fn(node);
    for (const barn of node.children ?? []) {
        besok(barn, fn);
    }
};

export function rehypeHeadingIds() {
    return (tree) => {
        const brukt = new Map();
        besok(tree, (node) => {
            if (node.type !== "element" || !/^h[1-6]$/.test(node.tagName)) {
                return;
            }
            const slug = slugify(tekstFra(node));
            const antall = brukt.get(slug) ?? 0;
            brukt.set(slug, antall + 1);
            node.properties = {
                ...node.properties,
                id: antall === 0 ? slug : `${slug}-${antall}`,
            };
        });
    };
}
