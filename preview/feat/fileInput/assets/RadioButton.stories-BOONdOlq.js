import{j as n,r as m}from"./iframe-B6x1XYmx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D8EX9a5l.js";import i from"./BaseRadioButton.stories-CAqudYsa.js";import{F as d}from"./FieldGroup-LOWdTBc1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D1gxQ_bV.js";import"./SupportLabel-BF4RN0IW.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D7lf9DYS.js";import"./Icon-D4K1M1lv.js";import"./WarningIcon-C94l5-IQ.js";import"./BaseRadioButton-COsz1ZXT.js";import"./Label-CaAqp9cl.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
