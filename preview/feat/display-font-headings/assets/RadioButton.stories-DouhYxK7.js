import{j as n,r as m}from"./iframe-BgZoqqd0.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DkAMnkfQ.js";import i from"./BaseRadioButton.stories-CTMhuJIQ.js";import{F as d}from"./FieldGroup-Tl8JL9UX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CfHOvLHs.js";import"./SupportLabel-BxFC2Q-c.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BC_ttFZQ.js";import"./Icon-DQHNwW0F.js";import"./WarningIcon-DanBspbW.js";import"./BaseRadioButton-BgRCSQFG.js";import"./Label-DfLg0fLX.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
