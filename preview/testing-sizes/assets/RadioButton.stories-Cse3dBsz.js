import{j as n,r as m}from"./iframe-wGytpD59.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B4Qd-d78.js";import i from"./BaseRadioButton.stories-DtQAzEqL.js";import{F as d}from"./FieldGroup-Dp9qyJ6W.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bo3Wrbvr.js";import"./SupportLabel-DtXg2nDL.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CM3z6qLv.js";import"./Icon-CmJnPYMG.js";import"./BaseRadioButton-BpokYQm8.js";import"./Label-CrmB_f_e.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
