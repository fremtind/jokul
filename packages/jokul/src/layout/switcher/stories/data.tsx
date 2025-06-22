import { Flex } from "../../../components/flex/Flex.jsx";

const ExampleContent = ({
    title,
    content,
}: { title: string; content: string }) => (
    <Flex direction="column" gap={12}>
        <h3 className="jkl-heading-3">{title}</h3>
        <p className="jkl-body">{content}</p>
    </Flex>
);

export const blockContents = [
    {
        title: "Guiding",
        content: "Breadcrumbs help wayfinding no matter how many layers.",
    },

    {
        title: "Hierarchal",
        content:
            "Breadcrumbs show a user's current location within the hierarchy of a site.",
    },

    {
        title: "Contextual",
        content:
            "Breadcrumbs help users understand what screen they're on relative to the information architecture.",
    },
    {
        title: "Supportive",
        content:
            "Dividers separate groups of content when white space isn’t clear enough.",
    },

    {
        title: "Subtle",
        content:
            "Dividers are just noticeable enough to be effective and not interruptive.",
    },

    {
        title: "Seldom",
        content:
            "Dividers are used sparingly to group content, not separate multiple list items.",
    },
];

export const blockContentsMapped = {
    1: blockContents
        .slice(0, 1)
        .map((item) => <ExampleContent key={item.title} {...item} />),
    2: blockContents
        .slice(0, 2)
        .map((item) => <ExampleContent key={item.title} {...item} />),
    3: blockContents
        .slice(0, 3)
        .map((item) => <ExampleContent key={item.title} {...item} />),
    4: blockContents
        .slice(0, 4)
        .map((item) => <ExampleContent key={item.title} {...item} />),
    5: blockContents
        .slice(0, 5)
        .map((item) => <ExampleContent key={item.title} {...item} />),
    6: blockContents
        .slice(0, 6)
        .map((item) => <ExampleContent key={item.title} {...item} />),
};
