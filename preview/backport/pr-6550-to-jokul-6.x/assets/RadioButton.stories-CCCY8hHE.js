import{j as n,r as m}from"./iframe-Ba0Nqpfv.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dd3ibaCE.js";import i from"./BaseRadioButton.stories-B1Xqlzbj.js";import{F as d}from"./FieldGroup-Sh_-GYjk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D3RQ_H-C.js";import"./SupportLabel-CAh8b_km.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BSVg3a-3.js";import"./Icon-VjY71dMF.js";import"./WarningIcon-qPEY7SBA.js";import"./BaseRadioButton-C0cQQ_T9.js";import"./Label-C9ZJHtH9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
