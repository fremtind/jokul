import{j as n,r as m}from"./iframe-CC8zZrjQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-6VGLiqli.js";import i from"./BaseRadioButton.stories-Bmc4vaHx.js";import{F as d}from"./FieldGroup-Bu5Abked.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CkLuhW2t.js";import"./SupportLabel-mBU7h_ZZ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B4exl0E4.js";import"./Icon-C8NDwnt_.js";import"./WarningIcon-CNT-3lqA.js";import"./BaseRadioButton-DTH7iwFd.js";import"./Label-xCk0XoJj.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
