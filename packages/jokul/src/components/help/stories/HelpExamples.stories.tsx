import type { Meta, StoryObj } from "@storybook/nextjs";
import { Help } from "../Help.js";
import "../styles/_index.scss";
import { Autosuggest } from "../../autosuggest/index.js";
import AutosuggestStories from "../../autosuggest/stories/Autosuggest.stories.js";
import { Combobox } from "../../combobox/index.js";
import ComboboxStories, {
    ComboboxStory,
} from "../../combobox/stories/Combobox.stories.js";
import { DateInput } from "../../date-input/index.js";
import { FieldGroup, InputGroup } from "../../input-group/index.js";
import FieldGroupStories from "../../input-group/stories/FieldGroup.stories.js";
import InputGroupStories from "../../input-group/stories/InputGroup.stories.js";
import { Search } from "../../search/index.js";
import { Select } from "../../select/index.js";
import SelectStories, {
    SelectStory,
} from "../../select/stories/select.stories.js";
import { TextArea } from "../../text-area/index.js";
import TextAreaStories from "../../text-area/stories/TextArea.stories.js";
import { TextInput } from "../../text-input/index.js";

const meta = {
    title: "Komponenter/Help/Eksempler",
    component: Help,
    args: {
        showButtonText: false,
        position: "top",
        buttonText: "Hjelp",
        children: "Jeg er en hjelpetekst",
    },
    tags: ["!autodocs"],
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelpTextInput: Story = {
    name: "Text Input",
    render: (args) => {
        return <TextInput label={"Navn"} tooltip={<Help {...args} />} />;
    },
};

export const HelpDateInput: Story = {
    name: "Date Input",
    render: (args) => {
        return <DateInput label={"Navn"} tooltip={<Help {...args} />} />;
    },
};

export const HelpCombobox: Story = {
    name: "Combobox",
    render: (args) => {
        return (
            <Combobox
                {...ComboboxStories.args}
                {...ComboboxStory.args}
                width="300px"
                tooltip={<Help {...args} />}
            />
        );
    },
};

export const HelpTextArea: Story = {
    name: "Text area",
    render: (args) => {
        return (
            <TextArea {...TextAreaStories.args} tooltip={<Help {...args} />} />
        );
    },
};

export const HelpSearch: Story = {
    name: "Search",
    render: (args) => {
        return (
            <Search
                labelProps={{ srOnly: false }}
                tooltip={<Help {...args} />}
            />
        );
    },
};

export const HelpSelect: Story = {
    name: "Select",
    render: (args) => {
        return (
            <Select
                {...SelectStories.args}
                {...SelectStory.args}
                name="select"
                label="Hva jobber du som?"
                items={[]}
                tooltip={<Help {...args} />}
            />
        );
    },
};

export const HelpAutosuggest: Story = {
    name: "Autosuggest",
    render: (args) => {
        return (
            <Autosuggest
                {...AutosuggestStories.args}
                tooltip={<Help {...args} />}
            />
        );
    },
};

export const HelpInputGroup: Story = {
    name: "Input Group",
    render: (args) => {
        return (
            <InputGroup
                {...InputGroupStories.args}
                label="Fødselsnummer"
                tooltip={<Help {...args} />}
            />
        );
    },
};

export const HelpFieldGroup: Story = {
    name: "Field Group",
    render: (args) => {
        return (
            <FieldGroup
                {...FieldGroupStories.args}
                legend="Hvordan kan vi kontakte deg?"
                tooltip={<Help {...args} />}
            />
        );
    },
};
