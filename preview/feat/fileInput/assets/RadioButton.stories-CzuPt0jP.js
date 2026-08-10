import{j as n,r as m}from"./iframe-CRaXpHkT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dk8CRChI.js";import i from"./BaseRadioButton.stories-8pj5X0v5.js";import{F as d}from"./FieldGroup-DTeaXBJW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-LQSbAgNg.js";import"./SupportLabel-Dttbqcxv.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-1MvWaD6D.js";import"./Icon-DKN65L04.js";import"./WarningIcon-BiZOQpS8.js";import"./BaseRadioButton-BMfFXaXZ.js";import"./Label-DnW3F5hA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
