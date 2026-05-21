import{j as n,r as m}from"./iframe-BcWBBkWW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DU9X_QgX.js";import i from"./BaseRadioButton.stories-DC90mm-1.js";import{F as d}from"./FieldGroup-C3uVfo3w.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CXwkjj0-.js";import"./SupportLabel-CBu4Y3Q4.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BMj_Z0qE.js";import"./Icon-C_cgTqSN.js";import"./BaseRadioButton-DW-2OAtg.js";import"./Label-BHCb5mCF.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
