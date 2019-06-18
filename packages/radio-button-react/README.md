# `Jøkul radio buttons`

Components for creating choices using radio buttons. The main component is RadioButtonChoice, which creates a fieldset of radio buttons from a given set of input choices. The component is meant to be used as a controlled component, and does not handle state except for an optional `selectedValue` prop.

There is also a separate RadioButton component, which creates a single radio button with given name and value.

For more information, see the [Jøkul Storybook]()

## Usage

It is recommended to use RadioButtonChoice as a controlled component:

```jsx
const choices = ["👍", "👎", "🤷‍♀️"];
const [selectedValue, setSelectedValue] = useState("👍");

<RadioButtonChoice
    name="Do you like radio buttons?"
    choices={choices}
    selectedValue={selectedValue}
    onChange={(event) => setSelectedValue(event.target.value)}
/>;
```
