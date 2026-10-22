import{j as n,r as m}from"./iframe-DyXZgdMt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CndTA1k_.js";import i from"./BaseRadioButton.stories-8YfXigvX.js";import{F as d}from"./FieldGroup-90fpa6GZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-5lIUKqkD.js";import"./SupportLabel-BwuODeWr.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DN1jTQOG.js";import"./Icon-BYJ5CBOm.js";import"./WarningIcon-O9H6woes.js";import"./BaseRadioButton-D6ZjToMB.js";import"./Label-B4E0kpuz.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
