import{j as n,r as m}from"./iframe-q41Z3BPG.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D5y2pxxG.js";import i from"./BaseRadioButton.stories-Cll3LOP5.js";/* empty css               */import{F as p}from"./FieldGroup-28AwtC91.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CZG946Nl.js";import"./SupportLabel-B8K6zOQw.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BRF-5bkL.js";import"./Icon-BmG3ozP5.js";import"./BaseRadioButton-aq_5YYyY.js";import"./Label-BF6tg-rQ.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
