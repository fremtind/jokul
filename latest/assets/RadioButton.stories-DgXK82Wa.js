import{j as n,r as m}from"./iframe-BrFIT77Y.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CQ7TnAys.js";import i from"./BaseRadioButton.stories-B_pn0naQ.js";import{F as d}from"./FieldGroup-DsoDuMBA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CsRQK4qu.js";import"./SupportLabel-C6aodhO1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DKtyQLGC.js";import"./Icon-B2lefLg7.js";import"./WarningIcon-C7ukgIU8.js";import"./BaseRadioButton-BiKcXQC1.js";import"./Label-CSvZuohP.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
