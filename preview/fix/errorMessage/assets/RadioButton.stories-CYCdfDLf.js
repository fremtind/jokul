import{j as m,r as s}from"./iframe-DlWmKjDn.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CGieBBOk.js";import d from"./BaseRadioButton.stories-GBw0FFlj.js";import{F as p}from"./FieldGroup-COnW4MFb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-HA2S6j5e.js";import"./SupportLabel-qHcV-8SK.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CljYjetG.js";import"./Icon-CfDCEJrt.js";import"./WarningIcon-7FGWtw0g.js";import"./BaseRadioButton-zyRW5yWo.js";import"./Label-DxgzhtHf.js";const h={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button"}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
