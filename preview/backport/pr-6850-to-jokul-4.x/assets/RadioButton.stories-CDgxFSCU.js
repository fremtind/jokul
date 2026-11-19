import{j as n,r as m}from"./iframe-Dj9xRCN8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DSY8rYTK.js";import i from"./BaseRadioButton.stories-DvXXC3sh.js";/* empty css               */import{F as p}from"./FieldGroup-tCrtwnGW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CMtk1gaq.js";import"./SupportLabel-Ck1rDyQc.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-LiFBWbrn.js";import"./Icon-CCLu8-5q.js";import"./BaseRadioButton-DFvDLW9d.js";import"./Label-BLHi301j.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
