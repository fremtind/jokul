import{j as n,r as m}from"./iframe-BqwTl-nT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-OfyreLGV.js";import i from"./BaseRadioButton.stories-DnZBopcl.js";import{F as d}from"./FieldGroup-BnkxrnKi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CuONxRoQ.js";import"./SupportLabel-DloRbX1Z.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C6Ur4gcP.js";import"./Icon-BoAx-Ogl.js";import"./WarningIcon-B1JZRA2a.js";import"./BaseRadioButton-Cjz00Bzm.js";import"./Label-CIr-j1IW.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
