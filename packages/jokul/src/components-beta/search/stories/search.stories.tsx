import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Button } from "../../../components/button/index.js";
import { Card } from "../../../components/card/Card.jsx";
import { Flex } from "../../../components/flex/index.js";
import { Icon, SearchIcon } from "../../../components/icon/index.js";
import { List, ListItem } from "../../../components/list/index.js";
import { MenuItem } from "../../../components/menu/index.js";
import {
    Modal,
    ModalBody,
    ModalContainer,
    ModalOverlay,
    useModal,
} from "../../../components/modal/index.js";
import { Popover } from "../../../components/popover/index.js";
import { BETA_Select } from "../../select/index.js";
import { Search } from "../Search.js";
import { SearchButton } from "../SearchButton.js";
import { BETA_Search } from "../index.js";
import { SearchButtonStory } from "./search-button.stories.jsx";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Beta/Search",
    component: Search,
    subcomponents: {
        SearchButton,
    },
    parameters: {
        layout: "centered",
    },
    args: {
        spellCheck: false,
        label: "Søk",
        placeholder: "Søk",
        icon: "search",
        description: "",
        required: true,
        disabled: false,
        labelProps: {
            srOnly: true,
        },
    },
    argTypes: {
        icon: {
            control: "select",
            options: ["search", "filter_list", "filter_alt"],
            table: {
                defaultValue: { summary: "search" },
            },
        },
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof Search>;

export const _Search: Story = {
    name: "Søk",
};

const categories = ["Layout", "Tekst", "Gruppering", "Alle"].sort();
const components = [
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
    "Alle",
].sort();

export const SearchWithDatalist: Story = {
    name: "Søk med autosuggest",
    args: {
        list: "components",
    },
    render: (args) => (
        <>
            <Search {...args}>
                <datalist id={args.list}>
                    {components.map((keyword) => (
                        <option key={keyword}>{keyword}</option>
                    ))}
                </datalist>
            </Search>
        </>
    ),
};

export const SearchWithButton: Story = {
    name: "Søk med knapp",
    args: {
        label: "Søk",
        placeholder: "",
    },
    render: (args) => (
        <Flex gap="xl" wrap="wrap">
            <Flex direction="column" gap="m">
                <Search {...args}>
                    <Search.Button {...SearchButtonStory.args} />
                </Search>
            </Flex>
        </Flex>
    ),
};

export const BigSearch: Story = {
    name: "Søk som hovedhandling på en side",
    parameters: {
        layout: "centered",
    },
    args: {
        labelProps: {
            srOnly: true,
        },
        placeholder: "",
    },
    render: (args) => (
        <Flex
            as="form"
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <h2 className="jkl-heading-2">Hva leter du etter?</h2>
            <Search {...args}>
                <Search.Button type="submit" />
            </Search>
        </Flex>
    ),
};

export const SearchFilter: Story = {
    name: "Søk som filter",
    args: {
        placeholder: "Filtrer etter navn",
        label: "Filtrer etter navn",
        icon: "filter_list",
    },
    parameters: {
        layout: "padded",
    },
    render: (args) => {
        const [results, setResults] = useState(components);

        return (
            <Flex direction="column" gap="s">
                <Search
                    {...args}
                    onChange={(e) => {
                        setResults(
                            components.filter((result) =>
                                result
                                    .toLowerCase()
                                    .includes(e.target.value.toLowerCase()),
                            ),
                        );
                    }}
                />
                <section aria-live="polite">
                    <p className={results.length ? "jkl-sr-only" : ""}>
                        {`${results.length} komponenter funnet`}
                    </p>
                    <Flex
                        as="ul"
                        gap="xs"
                        direction="column"
                        style={{
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        {!!results.length &&
                            results.map((result) => (
                                <Card as="li" key={result}>
                                    <p className="jkl-heading-5">{result}</p>
                                    <div
                                        style={{
                                            color: "var(--jkl-color-text-subdued)",
                                        }}
                                    >
                                        <p className="jkl-small">Komponent</p>
                                        <p className="jkl-small">
                                            Mer informasjon
                                        </p>
                                    </div>
                                </Card>
                            ))}
                    </Flex>
                </section>
            </Flex>
        );
    },
};

export const SearchWithResultsInPopover: Story = {
    name: "Popover med søk",
    render: (args) => {
        const [showResults, setShowResults] = useState(false);
        const [results, setResults] = useState(components);

        return (
            <Popover open={showResults}>
                <Popover.Trigger aria-expanded={showResults} asChild>
                    <Search
                        {...args}
                        onChange={(e) => {
                            e.target.value.length !== 0 && setShowResults(true);
                            setResults(
                                components.filter((result) =>
                                    result
                                        .toLowerCase()
                                        .includes(e.target.value.toLowerCase()),
                                ),
                            );
                        }}
                    />
                </Popover.Trigger>
                <Popover.Content
                    padding={8}
                    role="menu"
                    style={{ maxWidth: "25ch" }}
                    aria-live="polite"
                >
                    <p className="jkl-sr-only">
                        {`${results.length} komponenter funnet`}
                    </p>
                    {results.map((result) => (
                        <MenuItem key={result} as="a" href="#">
                            {result}
                        </MenuItem>
                    ))}
                </Popover.Content>
            </Popover>
        );
    },
};

export const SearchHeaderButton: Story = {
    name: "Header med søkeknapp",
    parameters: {
        layout: "centered",
    },
    args: {
        labelProps: {
            variant: "large",
        },
        placeholder: "Søk i hele Jøkul",
    },
    render: (args) => {
        const [searchString, setSearchString] = useState("");
        const [instance, { overlay, container, modal }] = useModal({
            title: "",
        });

        const filteredComponents = components.filter((word) =>
            word.includes(searchString),
        );

        return (
            <>
                <Flex
                    as="header"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{
                        minInlineSize: "50cqi",
                        padding: "var(--jkl-spacing-s) var(--jkl-spacing-m)",
                        background:
                            "var(--jkl-color-background-container-high)",
                    }}
                >
                    <p className="jkl-heading-4">Jøkul</p>
                    <Flex gap="xs">
                        <Button
                            variant="ghost"
                            onClick={() => instance.show()}
                            icon={<SearchIcon />}
                            aria-label="Åpne søk"
                        />
                        <Button
                            variant="ghost"
                            icon={<Icon>menu</Icon>}
                            aria-label="Meny"
                        />
                    </Flex>
                </Flex>
                <ModalContainer {...container}>
                    <ModalOverlay {...overlay} />
                    <Modal {...modal}>
                        <Flex as={ModalBody} gap="m" direction="column">
                            <BETA_Search
                                {...args}
                                value={searchString}
                                onChange={(e) =>
                                    setSearchString(e.target.value)
                                }
                            />
                            <div aria-live="polite">
                                <p className="jkl-sr-only">
                                    {`${filteredComponents.length} komponenter funnet`}
                                </p>
                                <List>
                                    {filteredComponents.map((word) => (
                                        <ListItem key={word}>{word}</ListItem>
                                    ))}
                                </List>
                            </div>
                        </Flex>
                    </Modal>
                </ModalContainer>
            </>
        );
    },
};

export const SearchToolbar: Story = {
    name: "Toolbar med søkefilter",
    parameters: {
        layout: "fullscreen",
    },
    args: {
        label: "Filtrer etter navn",
        placeholder: "",
        labelProps: {
            srOnly: false,
        },
        icon: "filter_list",
    },
    render: (args) => {
        const [results, setResults] = useState(components);

        return (
            <Flex direction="column" gap="s">
                <Card asChild>
                    <Flex
                        as="menu"
                        alignItems="end"
                        justifyContent="space-between"
                        gap="xl"
                        style={{
                            display: "flex",
                            minInlineSize: "50cqi",
                            padding:
                                "var(--jkl-spacing-m) var(--jkl-spacing-m)",
                            background:
                                "var(--jkl-color-background-container-high)",
                        }}
                    >
                        <Flex gap="xs">
                            <Search
                                {...args}
                                onChange={(e) =>
                                    setResults(
                                        components.filter((component) =>
                                            component
                                                .toLowerCase()
                                                .includes(
                                                    e.target.value.toLowerCase(),
                                                ),
                                        ),
                                    )
                                }
                            />
                        </Flex>

                        <Flex gap="s">
                            <BETA_Select label="Komponent" placeholder="">
                                {components.map((word) => (
                                    <option key={word}>{word}</option>
                                ))}
                            </BETA_Select>
                            <BETA_Select label="Gruppe" placeholder="">
                                {categories.map((category) => (
                                    <option key={category}>{category}</option>
                                ))}
                            </BETA_Select>
                        </Flex>
                    </Flex>
                </Card>
                {!!results.length &&
                    results.map((result) => (
                        <Card as="li" key={result}>
                            <p className="jkl-heading-5">{result}</p>
                            <div
                                style={{
                                    color: "var(--jkl-color-text-subdued)",
                                }}
                            >
                                <p className="jkl-small">Komponent</p>
                                <p className="jkl-small">Mer informasjon</p>
                            </div>
                        </Card>
                    ))}
            </Flex>
        );
    },
};
