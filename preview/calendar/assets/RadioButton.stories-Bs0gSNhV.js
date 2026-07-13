import{j as n,r as m}from"./iframe-C6c0I4sO.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-sIFVW4_a.js";import i from"./BaseRadioButton.stories-D2IPXmPn.js";import{F as d}from"./FieldGroup-B7jws5X6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CRVymwtD.js";import"./SupportLabel-DoPr4dLE.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CX0rj3xA.js";import"./Icon-DhZ_2Gun.js";import"./WarningIcon-QdUhx_bs.js";import"./BaseRadioButton-B4m1v2rX.js";import"./Label-CuXi5aop.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
