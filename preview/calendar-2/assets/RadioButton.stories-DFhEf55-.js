import{j as n,r as m}from"./iframe-B9kJZceo.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DCKcr9FV.js";import i from"./BaseRadioButton.stories-BdjqIzuT.js";import{F as d}from"./FieldGroup-D-hz_BIj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DSBbTZ7r.js";import"./SupportLabel-DVHOsnJ-.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-bOMSkm-h.js";import"./Icon-C9KgRYQm.js";import"./WarningIcon-Cx1rEU8g.js";import"./BaseRadioButton-JsVZ36e0.js";import"./Label-C5Yg6SgH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
