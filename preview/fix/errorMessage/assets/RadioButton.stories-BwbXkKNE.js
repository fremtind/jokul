import{j as m,r as s}from"./iframe-urgnXIU9.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B5r1ZMJ0.js";import d from"./BaseRadioButton.stories-Beb2ytfu.js";import{F as p}from"./FieldGroup-BM8pkPwf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D-TcWVDC.js";import"./SupportLabel-CPq8890n.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DhRosu-h.js";import"./Icon-CeELcob2.js";import"./WarningIcon-El9rVX5s.js";import"./BaseRadioButton-DEilXmCd.js";import"./Label-Dz7si7u4.js";const G={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button",errorLabel:""}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
