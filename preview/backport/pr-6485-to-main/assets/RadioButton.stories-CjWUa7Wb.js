import{j as n,r as m}from"./iframe-Bs0Cqlfw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bp3rJCzL.js";import i from"./BaseRadioButton.stories-BGodekD0.js";import{F as d}from"./FieldGroup-D9u5F5Gm.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BiVwqN8e.js";import"./SupportLabel-Ce7XOasm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C-sUBhzp.js";import"./Icon-TvVxXKgX.js";import"./WarningIcon-1sZe7W9i.js";import"./BaseRadioButton-CMQfO2iS.js";import"./Label-z19zwp89.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
