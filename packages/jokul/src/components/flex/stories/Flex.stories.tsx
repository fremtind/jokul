import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import React from "react";
import { Flex } from "../Flex.js";

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
                "auto",
                1,
                2,
                3,
                4,
                6,
                4.8,
                8.4,
                "2.10",
                10.2,
                3.9,
                9.3,
                5.7,
                7.5,
                "{ xs: 1, md: 2, lg: 4 }",
                '{ xs: 1, md: "auto" }',
            ],
            mapping: {
                '{"xs":1,"md":2,"lg":4}': { xs: 1, md: 2, lg: 4 },
                '{"xs":1,"md":"auto"}': { xs: 1, md: "auto" },
            },
            description: `Sets layout for items per row.
            Layouts with equal width is named to correlate with the count of items you want per row, as this gives a consistent experience when nesting.
            Layouts with uneven width, is named based on a 12-column grid to correlate with how designers work in Figma.
            \nAccepts both a single value \`layout="2"\` or a object to specify different values for different breakpoints (all breakpoints are optional):
            \`layout={{ xs: 1, md: 2, lg: 4 }}\`.
        `,
        },
        gap: {
            control: "select",
            options: [
                "none",
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "xxl",
                "xxl xl",
                "xxl lg",
                "xxl md",
                "xxl sm",
                "xxl xs",
                "xxl none",
                "xl xxl",
                "xl lg",
                "xl md",
                "xl sm",
                "xl xs",
                "xl none",
                "lg xxl",
                "lg xl",
                "lg md",
                "lg sm",
                "lg xs",
                "lg none",
                "md xxl",
                "md xl",
                "md lg",
                "md sm",
                "md xs",
                "md none",
                "sm xxl",
                "sm xl",
                "sm lg",
                "sm md",
                "sm xs",
                "sm none",
                "xs xxl",
                "xs xl",
                "xs lg",
                "xs md",
                "xs sm",
                "xs none",
                "none xxl",
                "none xl",
                "none lg",
                "none md",
                "none sm",
                "none xs",
                `{ xs: 'none', md: 'xl' }`,
            ],
            mapping: {
                [`{ xs: 'none', md: 'xl' }`]: { xs: "none", md: "sm xl" },
            },
            description: `Gap can be one of predefined constants. Also accepts two values separated by whitespace to specifiy different row and colum gap.
            For example \`gap="lg md"\` will cause \`lg\` row gap, and \`md\` column gap.
            \nThe gap sizes are \`xs\` (\`unit-10\` / \`8px\`), \`sm\` (\`unit-20\` / \`16px\`), \`md\` (\`unit-30\` / \`24px\`), \`lg\` (\`unit-40\` / \`32px\`), \`xl\` (\`unit-50\` / \`40px\`), \`xxl\` (\`unit-100\` / \`80px\`).
            \nAccepts both a single value \`gap="md"\` or a object to specify different values for different breakpoints (all breakpoints are optional):
            \`gap={{ xs: 'none', md: 'lg' }}\`.`,
            table: { defaultValue: { summary: "'md'" } },
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
            options: [false, true, "xxl", "xl", "lg", "md"],
            table: { defaultValue: { summary: "false" } },
        },
        align: {
            control: "inline-radio",
            options: [
                "normal",
                "start",
                "center",
                "end",
                "baseline",
                "stretch",
            ],
            description: "Change `align-items`",
        },
        alignContent: {
            control: "inline-radio",
            options: [
                "normal",
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
        justify: {
            control: "inline-radio",
            options: [
                "normal",
                "start",
                "center",
                "end",
                "space-between",
                "space-around",
                "space-evenly",
            ],
            description: "Change `justify-content`",
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
        gap: "md",
        center: false,
        fill: false,
        align: "normal",
        alignContent: "normal",
        justify: "normal",
        direction: "row",
        inline: false,
        wrap: "wrap",
    },
    parameters: {
        tag: "Containers",
        figma: "",
    },
} satisfies Meta<typeof Flex>;

type Story = StoryObj<typeof meta>;

export default meta;

const decorators = [
    (Story: StoryFn) => (
        <>
            <div className="flex-decorator">
                <style>{`
            .sbdocs-preview > .docs-story > * { flex-direction: row }
            .sbdocs-preview > .docs-story > * > * { flex-grow: 1 }
            .sb-show-main.sb-main-padded { padding-inline: 0!important }
            :where(.flex-decorator div) { outline: 1px dashed rgba(0,0,0,.3) } /* Show grid columns */
            * { box-sizing: border-box }
            `}</style>
                <Story />
            </div>
        </>
    ),
];

export const Default: Story = {
    decorators,
    args: {
        center: true,
        layout: 6,
        gap: "xl",
    },
    render(args) {
        return (
            <Flex {...args}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </Flex>
        );
    },
};

export const PredefinedLayouts: Story = {
    decorators: decorators.concat([
        (Story) => (
            <Flex fill align="center" className="flexer">
                <style>{`
            .flexer { outline: 0 }
            .flexer > * { width: calc(100% - 100px) }
            .flexer > code { width: 50px; outline: 0; font-size: .875rem; padding-left: 1rem }
          `}</style>
                <Story />
            </Flex>
        ),
    ]),
    render(args) {
        return (
            <>
                <code />
                <p>
                    Layouts with equal width is named to correlate with the
                    count of items you want per row, as this gives a consistent
                    experience when nesting:
                </p>
                <code>auto:</code>
                <Flex {...args} layout="auto">
                    <div>a</div>
                </Flex>
                <code>1:</code>
                <Flex {...args} layout="1">
                    <div>a</div>
                </Flex>
                <code>2:</code>
                <Flex {...args} layout="2">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>3:</code>
                <Flex {...args} layout="3">
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                </Flex>
                <code>4:</code>
                <Flex {...args} layout="4">
                    <div>a</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                </Flex>
                <code>6:</code>
                <Flex {...args} layout="6">
                    <div>a</div>
                    <div>b</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                    <div>e</div>
                </Flex>
                <code />
                <p>
                    Layouts with uneven width, is named based on a 12-column
                    grid to correlate with how designers work in Figma:
                </p>
                <code>10.2:</code>
                <Flex {...args} layout="10.2">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>9.3:</code>
                <Flex {...args} layout="9.3">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>8.4:</code>
                <Flex {...args} layout="8.4">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>7.5:</code>
                <Flex {...args} layout="7.5">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>5.7:</code>
                <Flex {...args} layout="5.7">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>4.8:</code>
                <Flex {...args} layout="4.8">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>3.9:</code>
                <Flex {...args} layout="3.9">
                    <div>a</div>
                    <div>b</div>
                </Flex>
                <code>2.10:</code>
                <Flex {...args} layout="2.10">
                    <div>a</div>
                    <div>b</div>
                </Flex>
            </>
        );
    },
};
