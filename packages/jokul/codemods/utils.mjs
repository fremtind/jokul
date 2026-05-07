export function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function replaceSpecifier(text, from, to) {
    const pattern = new RegExp(
        `(?<![A-Za-z0-9_./-])${escapeRegExp(from)}(?![A-Za-z0-9_./-])`,
        "g",
    );

    let count = 0;
    const next = text.replace(pattern, () => {
        count += 1;
        return to;
    });

    return { text: next, count };
}

// Som replaceSpecifier, men uten "/" i grensemengden slik at Tailwind-modifikatorer
// som opacity (/50) og vilkårsverdier ([&_svg]:) fortsatt matches.
export function replaceTailwindClass(text, fromClass, toClass) {
    const pattern = new RegExp(
        `(?<![A-Za-z0-9-])${escapeRegExp(fromClass)}(?![A-Za-z0-9-])`,
        "g",
    );

    let count = 0;
    const next = text.replace(pattern, () => {
        count += 1;
        return toClass;
    });

    return { text: next, count };
}
