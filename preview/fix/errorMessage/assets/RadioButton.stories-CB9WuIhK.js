import{j as m,r as s}from"./iframe-2g7SZH6R.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B0nKed6M.js";import d from"./BaseRadioButton.stories-BdOPmo6L.js";import{F as p}from"./FieldGroup-Dsjf6EhB.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVeQxUMZ.js";import"./SupportLabel-D8VOrv1j.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-LN3iRBUy.js";import"./Icon-BMyYnRVP.js";import"./WarningIcon-D3gsu0c9.js";import"./BaseRadioButton-DoxGrJkK.js";import"./Label-BTZMEeLQ.js";const h={title:"Komponenter/Radio Button",component:e,args:{...d.args,children:"Radio button",value:"radio-button",errorLabel:""}},o={name:"Radio Button",args:{value:"radio-button"}},r={render:({errorLabel:a,...n})=>m.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:i.map(t=>s.createElement(e,{...o.args,...n,key:t,value:t,name:"kontaktmetode"},t))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
