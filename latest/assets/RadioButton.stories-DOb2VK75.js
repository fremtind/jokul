import{j as n,r as m}from"./iframe-Di3ffKTP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BNsxWxSd.js";import i from"./BaseRadioButton.stories-Dh8iUMvp.js";import{F as d}from"./FieldGroup-BXQ8id-I.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C3bTmqGz.js";import"./SupportLabel-Nr1x9upU.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B_7Ws1aU.js";import"./Icon-DJ7eB7hM.js";import"./WarningIcon-ztgYcCBH.js";import"./BaseRadioButton-9T2phVDC.js";import"./Label-dJA30Sj3.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
