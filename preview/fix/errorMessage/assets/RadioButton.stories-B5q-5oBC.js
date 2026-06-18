import{j as m,r as s}from"./iframe-CeBuZ173.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bjuj_UIu.js";import d from"./BaseRadioButton.stories-Ce9i25q1.js";import{F as p}from"./FieldGroup-CfhXo8A9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-2ZMxD3q-.js";import"./SupportLabel-d2pbHFoz.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Lh32IGwX.js";import"./Icon-Cwt2byyX.js";import"./WarningIcon-DrYwL1ga.js";import"./BaseRadioButton-DamFHtw4.js";import"./Label-Bi7Vhflv.js";const h={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button"}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button",
  args: {
    value: "radio-button"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    errorLabel,
    ...args
  }: RadioButtonStoryArgs) => <FieldGroup legend={"Kontaktmetoder"} errorLabel={errorLabel}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...r.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{r as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
