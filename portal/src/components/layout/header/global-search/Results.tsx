import { List, ListItem } from "@fremtind/jokul/list";

export const Results = ({ searchString = "" }) => {
    const keywords = [
        "Button",
        "Autosuggest",
        "Card",
        "Breadcrumbs",
        "Help",
        "Image",
        "List",
        "Pagination",
        "Modal",
        "Icon",
        "Search",
        "Flex",
        "Table",
        "Expander",
    ]
        .sort()
        .filter((word) => word.includes(searchString));

    return (
        <List>
            {keywords.map((word) => (
                <ListItem key={word}>{word}</ListItem>
            ))}
        </List>
    );
};
