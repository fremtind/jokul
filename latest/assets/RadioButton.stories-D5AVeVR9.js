import{j as n,r as m}from"./iframe-CMh9D78E.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BouV2Ccy.js";import i from"./BaseRadioButton.stories-CofPeBGI.js";import{F as d}from"./FieldGroup-CX18E8VX.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-KCngitWY.js";import"./SupportLabel-Br2DEvJa.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CFj_OqD6.js";import"./Icon-DYUnmMnn.js";import"./WarningIcon-CbHS5Rbp.js";import"./BaseRadioButton-BB2wzTi2.js";import"./Label-BfTu1n6N.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
