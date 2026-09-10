import{j as n,r as m}from"./iframe-BX-rw-hQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-si5cXFy6.js";import i from"./BaseRadioButton.stories-CWZtRYOf.js";import{F as d}from"./FieldGroup-P-zCuALR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bi3dtQ2D.js";import"./SupportLabel-CSmjuLil.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-C0eFkGBW.js";import"./Icon-ax05Dd50.js";import"./WarningIcon-Ch1pqErH.js";import"./BaseRadioButton-BkNdyY5n.js";import"./Label-DoOtU33q.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
