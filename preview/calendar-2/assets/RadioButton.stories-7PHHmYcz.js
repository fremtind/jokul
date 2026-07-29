import{j as n,r as m}from"./iframe-BTwN_uBw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CfQdkg1F.js";import i from"./BaseRadioButton.stories-DgUUHFwv.js";import{F as d}from"./FieldGroup-DX8hqyF4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lTbCt4qq.js";import"./SupportLabel-GkaKb36n.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DvB-MatB.js";import"./Icon-DBDJaZ0G.js";import"./WarningIcon-Cf1vTwAK.js";import"./BaseRadioButton-sM9oM7xl.js";import"./Label-Cd0DajG2.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
