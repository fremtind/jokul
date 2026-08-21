import{j as n,r as m}from"./iframe-DeU_jz5T.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DcdRmk1o.js";import i from"./BaseRadioButton.stories-CKAhtmg_.js";import{F as d}from"./FieldGroup-BoYkduC-.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D1EaGqVn.js";import"./SupportLabel-D6WH4HtN.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dw5j53cK.js";import"./Icon-CsOx2wbX.js";import"./WarningIcon-O4UeoV9V.js";import"./BaseRadioButton-I5odcxpc.js";import"./Label-Uhc6onVe.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
