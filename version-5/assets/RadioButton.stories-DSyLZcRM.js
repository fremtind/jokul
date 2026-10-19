import{j as n,r as m}from"./iframe-BxNf55fj.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BMDVY1Qt.js";import i from"./BaseRadioButton.stories-BsxfsQuC.js";import{F as d}from"./FieldGroup-t2G64Hdf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-0Qu1KV2B.js";import"./SupportLabel-Jr3XF-sj.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CnKnWfK-.js";import"./Icon-jJxukI8m.js";import"./WarningIcon-B45_DJgy.js";import"./BaseRadioButton-p6WZJ71k.js";import"./Label-DIngfPpM.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
