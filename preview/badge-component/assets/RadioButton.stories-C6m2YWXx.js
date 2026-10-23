import{j as n,r as m}from"./iframe-CojrUSGT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Duh30_9X.js";import i from"./BaseRadioButton.stories-CKLqETcV.js";import{F as d}from"./FieldGroup-CQ53nc0y.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Br0SqQb6.js";import"./SupportLabel-BPWe7_Y2.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dmft2l8F.js";import"./Icon-1BTzykdB.js";import"./WarningIcon-OPuQDt20.js";import"./BaseRadioButton-ByJ9O8S9.js";import"./Label-DbkJ6Prk.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
