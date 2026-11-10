import{j as n,r as m}from"./iframe-DtIGcVlb.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C8Xu60-z.js";import i from"./BaseRadioButton.stories-DCgA0sH8.js";import{F as d}from"./FieldGroup-CYzTWjkn.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B6z3ogTm.js";import"./SupportLabel-zs6GYa-h.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C0TEddrR.js";import"./Icon-lKtp1ETD.js";import"./WarningIcon-DFnUaSLc.js";import"./BaseRadioButton-DwNrK-Yk.js";import"./Label-DhIS9vte.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
