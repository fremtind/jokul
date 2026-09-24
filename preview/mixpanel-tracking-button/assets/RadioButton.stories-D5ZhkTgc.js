import{j as n,r as m}from"./iframe-BaF8H7Ap.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-0MbM3pk4.js";import i from"./BaseRadioButton.stories-BguD7Chu.js";import{F as d}from"./FieldGroup-BbPGg3vj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C08FyA_S.js";import"./SupportLabel-5Us-ppHQ.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BS68v-w2.js";import"./Icon-eS2heO-V.js";import"./WarningIcon-GIgFV64w.js";import"./BaseRadioButton-GwpafNIv.js";import"./Label-cVb9HkEc.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
