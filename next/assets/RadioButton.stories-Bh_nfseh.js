import{j as n,r as m}from"./iframe-Ce1037hD.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Ba46ni0s.js";import i from"./BaseRadioButton.stories-DbVhovxt.js";import{F as d}from"./FieldGroup-CkfLIO5r.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DE7Bh5g1.js";import"./SupportLabel-iOyIdFF8.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C2KDyf4h.js";import"./Icon-Cbfm2iqq.js";import"./WarningIcon-CGzaMTS8.js";import"./BaseRadioButton-B1KulNMN.js";import"./Label-BPe4OIb3.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
