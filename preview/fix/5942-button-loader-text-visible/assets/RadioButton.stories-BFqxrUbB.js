import{j as n,r as m}from"./iframe-BIhGwCwQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BVhQrnXM.js";import i from"./BaseRadioButton.stories-tnZkJmJz.js";/* empty css               */import{F as p}from"./FieldGroup-BxaDE-y3.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CFNZklCc.js";import"./SupportLabel-BXEd-RSA.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cg_WZoLD.js";import"./Icon-Oi-O2arH.js";import"./BaseRadioButton-DNHGfPFy.js";import"./Label-CbbewOJV.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
