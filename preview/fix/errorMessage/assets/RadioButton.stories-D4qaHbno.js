import{j as m,r as s}from"./iframe-RzsmKxaK.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cf2T8JFj.js";import d from"./BaseRadioButton.stories-Q7PQKdnr.js";import{F as p}from"./FieldGroup-DLLHFJNU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CKPIPRKl.js";import"./SupportLabel-C89OiLb8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Bji2pq7y.js";import"./Icon-lTyeqyYp.js";import"./WarningIcon-PWtg4xLq.js";import"./BaseRadioButton-Ch4hgHQv.js";import"./Label-BXqH8_dd.js";const h={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button"}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
