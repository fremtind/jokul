export const navCardExampleProps = {
    boolProps: [
        "Image",
        { prop: "Tag", defaultValue: true },
        { prop: "Description", defaultValue: true },
        { prop: "Ekstra info", defaultValue: true },
    ],
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl"],
            defaultValue: 1,
        },
        {
            name: "Top Padding",
            values: ["auto", "m", "l", "xl", "2xl", "3xl"],
            defaultValue: 0,
        },
    ],
};

export const taskCardExampleProps = {
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl"],
            defaultValue: 1,
        },
        {
            name: "Top Padding",
            values: ["auto", "m", "l", "xl", "2xl", "3xl"],
            defaultValue: 0,
        },
    ],
};

export const infoCardExampleProps = {
    boolProps: ["Image"],
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl"],
            defaultValue: 1,
        },
        {
            name: "Top Padding",
            values: ["auto", "m", "l", "xl", "2xl", "3xl"],
            defaultValue: 4,
        },
        {
            name: "Bottom Padding",
            values: ["auto", "m", "l", "xl", "2xl", "3xl"],
            defaultValue: 0,
        },
    ],
};
