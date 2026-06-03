import{j as n,r as m}from"./iframe-CqFs1EPX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ds1IG1Vd.js";import i from"./BaseRadioButton.stories-UvRAxmHe.js";/* empty css               */import{F as p}from"./FieldGroup-CC5LBytJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxSjxyo3.js";import"./SupportLabel-CHJq-S-H.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C3ok6_Zq.js";import"./Icon-D7vyOGow.js";import"./BaseRadioButton-B-lvAPAa.js";import"./Label-CAD9kVjM.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
