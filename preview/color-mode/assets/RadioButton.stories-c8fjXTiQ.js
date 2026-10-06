import{j as n,r as m}from"./iframe-CzG5Snpm.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CRlqxmXX.js";import i from"./BaseRadioButton.stories-DLea_3wI.js";import{F as d}from"./FieldGroup-D6ip77Fq.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-pL56pOKe.js";import"./SupportLabel-Bo5LZrVQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DlqWt41c.js";import"./Icon-DD6kNOun.js";import"./WarningIcon-DFcTqTrg.js";import"./BaseRadioButton-ByvW-ssA.js";import"./Label-DRL294PN.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
