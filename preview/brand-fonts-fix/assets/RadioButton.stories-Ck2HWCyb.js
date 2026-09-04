import{j as n,r as m}from"./iframe-CVcth_EK.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DB1TmHg8.js";import i from"./BaseRadioButton.stories-Duj2vis2.js";import{F as d}from"./FieldGroup-AtMN34DL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DO2lhBpB.js";import"./SupportLabel-D7zPzx4w.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BJiRp1BW.js";import"./Icon-DPcrPs2K.js";import"./WarningIcon-ByMew5wJ.js";import"./BaseRadioButton-CMh4G3E1.js";import"./Label-4UY4fuPu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
