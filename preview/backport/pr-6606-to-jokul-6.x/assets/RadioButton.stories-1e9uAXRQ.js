import{j as n,r as m}from"./iframe-Z8odhjME.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DxPu4vn2.js";import s from"./BaseRadioButton.stories-UdRJqZ1l.js";import{F as p}from"./FieldGroup-DLCxmfS9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-nk5Pzg2U.js";import"./SupportLabel-BE96whBe.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DB9Q3ILT.js";import"./Icon-BOtjTwN3.js";import"./types-BlFGa32c.js";import"./WarningIcon-DmPkFoQQ.js";import"./BaseRadioButton-DsNabD-b.js";import"./Label-DHItr_VW.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
