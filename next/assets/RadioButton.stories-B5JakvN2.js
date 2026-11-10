import{j as d,r as i}from"./iframe-D0GiTUun.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{R as s}from"./RadioButton-C5xMAKcF.js";import c from"./BaseRadioButton.stories-DRO5T72b.js";import{F as p}from"./FieldGroup-DAWlTc4C.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CNwTlfN6.js";import"./SupportLabel-BlqthqI0.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BW6R4n7V.js";import"./Icon-BUpmMndA.js";import"./types-BlFGa32c.js";import"./WarningIcon-CbGsFGyr.js";import"./BaseRadioButton-NWBlltE9.js";import"./Label-DJOHoAbW.js";const C={title:"Komponenter/Radio Button",component:s,args:{...c.args,children:"Radio button",value:"radio-button"}},e={name:"Radio Button"},r={args:{disabled:!0}},o={name:"Disabled og valgt",args:{disabled:!0,defaultChecked:!0}},t={render:n=>d.jsx(p,{legend:"Kontaktmetoder",children:m.map(a=>i.createElement(s,{...e.args,...n,key:a,value:a,name:"kontaktmetode"},a))})},E=["RadioButtonStory","Disabled","DisabledValgt","RadioButtonGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Disabled og valgt",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{r as Disabled,o as DisabledValgt,t as RadioButtonGroup,e as RadioButtonStory,E as __namedExportsOrder,C as default};
