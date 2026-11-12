import{j as n,r as m}from"./iframe-B57beeJR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cbig_FvQ.js";import i from"./BaseRadioButton.stories-8wCNR5tq.js";import{F as d}from"./FieldGroup-Tn_2yODE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-qP_8rBAS.js";import"./SupportLabel-DjBPc0QP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CFN2p_5G.js";import"./Icon-DrAerO0w.js";import"./WarningIcon-DzWIQ0ih.js";import"./BaseRadioButton-XikfF6Oq.js";import"./Label-CM8VJYH2.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
