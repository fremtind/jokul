import{j as n,r as m}from"./iframe-DFdol4GL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-ti0miOl_.js";import i from"./BaseRadioButton.stories-BaZ6RYmf.js";import{F as d}from"./FieldGroup-B533BOrI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DcVhGnhB.js";import"./SupportLabel-DDslyYDW.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CKXb8RPd.js";import"./Icon-l6Fq44AV.js";import"./WarningIcon-BgaS4G-B.js";import"./BaseRadioButton-D7FvLkK6.js";import"./Label-BVXb2yq7.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
