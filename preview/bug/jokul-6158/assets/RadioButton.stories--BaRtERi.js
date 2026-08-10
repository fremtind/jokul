import{j as n,r as m}from"./iframe-CtJC8Qdp.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-HjkoH7fU.js";import i from"./BaseRadioButton.stories-Df3V9g4I.js";import{F as d}from"./FieldGroup-aiYQZmTv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Xk2zoKK1.js";import"./SupportLabel-BJoXR-5q.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-aqGkqHd_.js";import"./Icon-CORfUIL8.js";import"./WarningIcon-CAN6AX3N.js";import"./BaseRadioButton-Kdx0Fkop.js";import"./Label-yo5noXiK.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
