import{j as n,r as m}from"./iframe-CWlPmRQd.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BIesVJoq.js";import i from"./BaseRadioButton.stories-BUH0TISw.js";import{F as d}from"./FieldGroup-809_xv_1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DSPJ-YNN.js";import"./SupportLabel-BIwnbXoY.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-7w4MqBwJ.js";import"./Icon-DpRevtWk.js";import"./WarningIcon-AigLNVqk.js";import"./BaseRadioButton-DbL7BjpG.js";import"./Label-DkCKs5Qb.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
