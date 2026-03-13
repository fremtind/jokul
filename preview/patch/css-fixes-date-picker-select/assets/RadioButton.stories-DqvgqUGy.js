import{j as n,r as m}from"./iframe-DmB4tOtU.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CRjgPBHs.js";import i from"./BaseRadioButton.stories-DRtTZQYL.js";import{F as d}from"./FieldGroup-DL4q_Hhb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BULXlfvn.js";import"./SupportLabel-DdF3LMuH.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CQN4XZU2.js";import"./Icon-b7MplHOl.js";import"./BaseRadioButton-Bt4--5Hp.js";import"./Label-CyRm-IeW.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
