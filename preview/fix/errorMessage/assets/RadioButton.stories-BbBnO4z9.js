import{j as m,r as s}from"./iframe-DW3e9-7K.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-hWHBig-4.js";import d from"./BaseRadioButton.stories-BoE0Pl-c.js";import{F as p}from"./FieldGroup-DxjUR3Gn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ukZfM2JJ.js";import"./SupportLabel-DN6Y5ht3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D_dk47XL.js";import"./Icon-vjKgXSRv.js";import"./WarningIcon-rzLA1h-n.js";import"./BaseRadioButton-B7PBkhOS.js";import"./Label-mZQVCVTl.js";const G={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button",errorLabel:""}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
