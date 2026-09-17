import{j as n,r as m}from"./iframe-n7A6R-H_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-HnHm5sLQ.js";import i from"./BaseRadioButton.stories-DVXsvrke.js";import{F as d}from"./FieldGroup-Qoou7buZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-sw9ozzrw.js";import"./SupportLabel-BPjAi-Zw.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BlaJI0Zq.js";import"./Icon-CndsemqE.js";import"./WarningIcon-PgK1B3Hh.js";import"./BaseRadioButton-Cqk0DRFo.js";import"./Label-Cc9kxnwm.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
