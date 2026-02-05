import{j as n,r as m}from"./iframe-DLN0b-4F.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dr84tbNx.js";import i from"./BaseRadioButton.stories-BkiO7Vvw.js";import{F as d}from"./FieldGroup-CwMQf0qc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CBOygkYO.js";import"./SupportLabel-B7h0NDbR.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bl71Yfcf.js";import"./Icon-DLt8tIui.js";import"./BaseRadioButton-BhTZxQ2u.js";import"./Label-Cl1An-25.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
