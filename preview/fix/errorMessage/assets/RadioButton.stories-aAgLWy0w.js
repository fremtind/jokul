import{j as m,r as s}from"./iframe-DM8Oulg6.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D1PIs-Bt.js";import d from"./BaseRadioButton.stories-DSI1xt9V.js";import{F as p}from"./FieldGroup-DsdQgz37.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cfta17ZX.js";import"./SupportLabel-q2BQYAvD.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BNnCNtTi.js";import"./Icon-3gKPKVOd.js";import"./WarningIcon-DX9Pi0Q0.js";import"./BaseRadioButton-DxhhlDJX.js";import"./Label-DtRhqL_d.js";const h={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button"}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
