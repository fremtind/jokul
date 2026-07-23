import{j as n,r as m}from"./iframe-j1IZglm2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DhkAvMVE.js";import i from"./BaseRadioButton.stories-DImnkx0L.js";import{F as d}from"./FieldGroup-8QSNqAKD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DBvmfo0A.js";import"./SupportLabel-B1D5mG-Z.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BPInm2zU.js";import"./Icon-Ci0v7dEm.js";import"./WarningIcon-CjHP1Pcg.js";import"./BaseRadioButton-C-PtD8jd.js";import"./Label-tpeiC-u4.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
