import type { Meta, StoryFn, StoryObj } from "@storybook/nextjs";
import tokens from "../../../core/tokens.js";
import { Flex } from "../Flex.js";
import { LAYOUTS } from "../types.js";

import "../styles/_index.scss";

const spacingSteps = Object.keys(tokens.semanticSpacing);
const gapValues = spacingSteps.flatMap((step) => [
    step,
    ...spacingSteps
        .filter((otherStep) => step !== otherStep)
        .map((otherStep) => `${step} ${otherStep}`),
]);

const meta = {
    title: "Komponenter/Flex",
    component: Flex,
    argTypes: {
        children: {
            description: "`React.ReactNode`",
        },
        layout: {
            control: "select",
            options: [
                ...LAYOUTS,
                "{ small: '1', medium: '2', large: '4' }",
                '{ small: "1", medium: "auto" }',
            ],
            mapping: {
                "{ small: '1', medium: '2', large: '4' }": {
                    small: "1",
                    medium: "2",
                    large: "4",
                },
                '{ small: "1", medium: "auto" }': {
                    small: "1",
                    medium: "auto",
                },
            },
            description: `Sets layout for items per row.
            Layouts with equal width is named to correlate with the count of items you want per row, as this gives a consistent experience when nesting.
            Layouts with uneven width, is named based on a 12-column grid to correlate with how designers work in Figma.
            \nAccepts both a single value \`layout="2"\` or a object to specify different values for different breakpoints (all breakpoints are optional):
            \`layout={{ small: "1", medium: "2", large: "4" }}\`.
        `,
        },
        gap: {
            control: "select",
            options: [...gapValues, `{ small: 'none', medium: 'xl' }`],
            mapping: {
                "{ small: 'none', medium: 'xl' }": {
                    small: "none",
                    medium: "xl",
                },
            },
            description: `Gap can be one of predefined constants. Also accepts two values separated by whitespace to specifiy different row and colum gap.
            For example \`gap="l m"\` will cause \`l\` row gap, and \`m\` column gap.
            \nThe gap sizes are \`2xs\` (\`unit-05\` / \`4px\`), \`xs\` (\`unit-10\` / \`8px\`), \`s\` (\`unit-20\` / \`16px\`), \`m\` (\`unit-30\` / \`24px\`), \`l\` (\`unit-40\` / \`32px\`), \`xl\` (\`unit-80\` / \`64px\`), \`2xl\` (\`unit-130\` / \`104px\`).
            \nAccepts both a single value \`gap="m"\` or a object to specify different values for different breakpoints (all breakpoints are optional):
            \`gap={{ xs: 'none', m: 'l' }}\`.`,
            table: { defaultValue: { summary: "16" } },
        },
        direction: {
            control: "inline-radio",
            options: ["row", "column", "row-reverse", "column-reverse"],
            description: "Change `flex-direction`",
            table: { defaultValue: { summary: "'row'" } },
        },
        fill: {
            control: "boolean",
            description: "Let children automatically fill parent",
        },
        inline: {
            control: "boolean",
            description:
                "Use `display: inline-flex` instead of `display: flex`",
        },
        center: {
            control: "select",
            description:
                "Center the `<Flex>` and add outer padding left and right",
            options: [false, true, "2xl", "xl", "l", "m"],
            table: { defaultValue: { summary: "false" } },
        },
        alignItems: {
            control: "select",
            options: ["start", "center", "end", "baseline", "stretch"],
            description: "Change `align-items`",
        },
        alignContent: {
            control: "select",
            options: [
                "start",
                "center",
                "end",
                "baseline",
                "stretch",
                "space-around",
                "space-between",
                "space-evenly",
            ],
            description: "Change `align-content`",
        },
        justifyContent: {
            control: "select",
            options: [
                "start",
                "center",
                "end",
                "space-between",
                "space-around",
                "space-evenly",
            ],
            description: "Change `justify-content`",
        },
        textAlign: {
            control: "inline-radio",
            options: ["left", "center", "right"],
            description: "Change `text-align`",
            table: { defaultValue: { summary: "'left'" } },
        },
        wrap: {
            control: "inline-radio",
            options: ["wrap", "nowrap", "reverse"],
            description: "Change `flex-wrap`",
            table: { defaultValue: { summary: "'wrap'" } },
        },
        as: {
            description:
                "By default, all Flex renders as regular `<div>` tags. You can change this by passing any HTML tag name or React component to the `as` prop.",
            table: { defaultValue: { summary: "'div'" } },
        },
        // eslint-disable-next-line
        // @ts-ignore
        "...all HTMLDivElement attributes": {
            description: `If no \`as\`: [See all relevant div attributes →](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes)
            <br />If \`as\`: All props of provided tag or component`,
        },
    },
    args: {
        layout: undefined,
        gap: "m",
        center: false,
        fill: false,
        alignItems: "normal",
        alignContent: "normal",
        justifyContent: "normal",
        direction: "row",
        inline: false,
        wrap: "wrap",
        asChild: true,
    },
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof meta>;

export default meta;

const decorators = [
    (Story: StoryFn) => (
        <div className="flex-decorator">
            <style>{`
            #storybook-root { width: 1900px }
            :where(.flex-decorator div) { padding: 0.5em; outline: 1px dashed var(--jkl-color-text-default) } /* Show grid columns */
            :where(.flex-decorator .jkl-flex) { outline: 1px solid var(--jkl-color-text-default) }
            :is(.flex-decorator p) { margin-block: 0.5em; }
            * { box-sizing: border-box }
            `}</style>
            <Story />
        </div>
    ),
];

export const Default: Story = {
    decorators,
    args: {
        center: "m",
        layout: "6",
        gap: "m",
        children: null,
    },
    render({ asChild, ...args }) {
        return (
            <Flex {...args}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
            </Flex>
        );
    },
};

export const Responsive: Story = {
    args: {
        children: null,
    },
    decorators,
    render({ asChild, ...props }) {
        return (
            <>
                <Flex
                    {...props}
                    layout={{ small: "1", medium: "2", large: "3", xl: "4" }}
                    gap={{ small: "none", medium: "s", large: "m", xl: "l" }}
                >
                    <div>Child 1</div>
                    <div>Child 2</div>
                    <div>Child 3</div>
                    <div>Child 4</div>
                    <div>Child 5</div>
                    <div>Child 6</div>
                </Flex>
                <Flex
                    {...props}
                    layout={{
                        small: "1",
                        medium: "7.5",
                        large: "8.4",
                        xl: "2",
                    }}
                    gap={{ medium: "none s", large: "s m", xl: "m xl" }}
                >
                    <div>Child even and uneven widths 1</div>
                    <div>Child even and uneven widths 2</div>
                </Flex>
                <span>
                    Resize browser to see how the layout changes, based on this
                    setup:
                    <pre>
                        {`<Flex\n  layout={{ small: 1, medium: 2, large: 3, xl: 4 }}\n  gap={{ small: 'none', medium: 's', large: 'm', xl: 'l' }}\n>`}
                    </pre>
                </span>
            </>
        );
    },
};

export const Nested: Story = {
    args: {
        children: null,
    },
    decorators,
    render({ asChild, ...props }) {
        return (
            <Flex {...props} layout="4.8" gap="xl">
                <div>
                    Sidebar
                    <Flex layout="2" gap="xl">
                        <div>Child 1</div>
                        <div>Child 2</div>
                    </Flex>
                </div>
                <Flex {...props} layout="2" gap="none">
                    <div>Child 1</div>
                    <Flex {...props} layout="3">
                        <div>Child 2-1</div>
                        <div>Child 2-2</div>
                        <div>Child 2-3</div>
                        <div>Child 2-4</div>
                        <div>Child 2-5</div>
                        <div>Child 2-6</div>
                    </Flex>
                    <div>Child 3</div>
                    <div>Child 4</div>
                </Flex>
            </Flex>
        );
    },
};

export const Fill: Story = {
    decorators,
    args: {
        layout: "3",
        children: null,
    },
    render({ asChild, ...props }) {
        return (
            <>
                <p>
                    <strong>
                        Without fill and layout=&apos;{String(props.layout)}
                        &apos;:
                    </strong>
                </p>
                <Flex {...props}>
                    <div>a</div>
                    <div>b</div>
                    <div>
                        Praesent elit lorem, fringilla non venenatis auctor,
                        fermentum sed elit. Nulla bibendum posuere convallis.
                        Proin scelerisque mattis pharetra.
                    </div>
                    <div>d</div>
                    <div>e - notice this item follows layout</div>
                    <div>f - notice this item follows layout</div>
                </Flex>
                <p>
                    <strong>
                        With fill and layout=&apos;{String(props.layout)}&apos;:
                    </strong>
                </p>
                <Flex {...props} fill>
                    <div>a</div>
                    <div>b</div>
                    <div>
                        Praesent elit lorem, fringillanonvenenatisauctor,
                        fermentumsedelit. Nulla bibendum posuere convallis.
                        Proin scelerisque mattis pharetra.
                    </div>
                    <div>d</div>
                    <div>e - notice this item fills width</div>
                    <div>f - notice this item fills width</div>
                </Flex>
            </>
        );
    },
};

export const Center: Story = {
    decorators: decorators.concat([
        (Story) => (
            <>
                <style>{`
            /* Set same size for all items in 12 column example */
            code { display: block }
          `}</style>
                <Story />
            </>
        ),
    ]),
    args: {
        center: true,
        gap: "l",
        layout: "1",
        children: null,
    },
    render({ asChild, ...props }) {
        return (
            <Flex center>
                <Flex {...props} id="example" layout="6">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </Flex>
                <Flex {...props} center="2xl">
                    <div>
                        <code>
                            &lt;Flex center&gt; | &lt;Flex
                            center=&apos;xxl&apos;&gt;
                        </code>
                        <small>= 12 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex {...props} center="xl">
                    <div>
                        <code>&lt;Flex center=&apos;xl&apos;&gt;</code>
                        <small>= 10 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex {...props} center="l">
                    <div>
                        <code>&lt;Flex center=&apos;l&apos;&gt;</code>
                        <small>= 8 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
                <Flex {...props} center="m">
                    <div>
                        <code>&lt;Flex center=&apos;m&apos;&gt;</code>
                        <small>= 6 units wide on xxl breakpoint</small>
                    </div>
                </Flex>
            </Flex>
        );
    },
};
