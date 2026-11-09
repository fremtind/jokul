import{j as n,r as m}from"./iframe-BB1Cp5_U.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BndYDQyA.js";import i from"./BaseRadioButton.stories-DXKDDXy5.js";import{F as d}from"./FieldGroup-BxLhoTvy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CrsDWm5I.js";import"./SupportLabel-fkjjMZgV.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DWAvjN6z.js";import"./Icon-CbNxZaXr.js";import"./WarningIcon-DBT0cMjV.js";import"./BaseRadioButton-DYj1WzNn.js";import"./Label-CzhSH2sX.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
