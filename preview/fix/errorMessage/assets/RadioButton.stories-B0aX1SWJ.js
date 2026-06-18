import{j as m,r as s}from"./iframe-C6cw858C.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DTTg5fVd.js";import d from"./BaseRadioButton.stories-cpF_z89_.js";import{F as p}from"./FieldGroup-1p9hO5rV.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C5hLgcHx.js";import"./SupportLabel-g6aGXEIX.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-YZNnMhuU.js";import"./Icon-DlkrbHjF.js";import"./WarningIcon-nL3Nkoza.js";import"./BaseRadioButton-Bl2ClpHz.js";import"./Label-Bj5GNkY3.js";const G={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button",errorLabel:""}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button",
  args: {
    value: "radio-button",
    errorLabel: ""
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
}`,...r.parameters?.docs?.source}}};const h=["RadioButtonStory","RadioButtonGroup"];export{r as RadioButtonGroup,o as RadioButtonStory,h as __namedExportsOrder,G as default};
