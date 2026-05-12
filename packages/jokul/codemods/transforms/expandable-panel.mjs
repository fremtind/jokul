// Variant-prop-endringer i ExpandablePanel:
//   variant="fill"   → fjernet (fill er default-atferd, prop eksisterer ikke lenger)
//   variant="stroke" → outlined (boolean prop)
//
// CSS-klasseendring:
//   jkl-expandable--stroke → jkl-expandable--outlined

const STROKE_PROP_PATTERN =
    /variant=(?:"stroke"|'stroke'|\{"stroke"}|\{'stroke'})/;

const FILL_PROP_PATTERN = /\s+variant=(?:"fill"|'fill'|\{"fill"}|\{'fill'})/;

const CSS_CLASS_PATTERN = /\bjkl-expandable--stroke\b/g;

// Matches an ExpandablePanel opening or self-closing tag.
// [^>]* is safe for JSX since > in prop values must be escaped ({">"}  or &gt;).
const EXPANDABLE_PANEL_TAG = /<ExpandablePanel\b[^>]*>/g;

export function applyExpandablePanelTransforms(text) {
    let next = text;
    let count = 0;

    next = next.replace(CSS_CLASS_PATTERN, () => {
        count++;
        return "jkl-expandable-panel--outlined";
    });

    next = next.replace(EXPANDABLE_PANEL_TAG, (tag) =>
        tag
            .replace(FILL_PROP_PATTERN, () => {
                count++;
                return "";
            })
            .replace(STROKE_PROP_PATTERN, () => {
                count++;
                return "outlined";
            }),
    );

    return { text: next, count };
}
