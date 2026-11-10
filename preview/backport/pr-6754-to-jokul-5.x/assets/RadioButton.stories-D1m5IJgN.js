import{j as n,r as m}from"./iframe-BQd0zWTP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-AxnRXg_y.js";import i from"./BaseRadioButton.stories-DqXO9v7v.js";import{F as d}from"./FieldGroup-GZ0YuEke.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CUOj4b_y.js";import"./SupportLabel--vg7QiaI.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CJzqvIXP.js";import"./Icon-DYI0M5Td.js";import"./WarningIcon-Bop46VXT.js";import"./BaseRadioButton-BYbMs4gh.js";import"./Label-Cy9qL1GZ.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
