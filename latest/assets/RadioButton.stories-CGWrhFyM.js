import{j as n,r as m}from"./iframe-BYDQ9t-R.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DAZbzGB8.js";import i from"./BaseRadioButton.stories-BqpjVNoX.js";import{F as d}from"./FieldGroup-B5e-CZGE.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CaYbnJL2.js";import"./SupportLabel-M_dy_Vbh.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DWrF41P2.js";import"./Icon-c392TJL2.js";import"./WarningIcon-C6XIyQv1.js";import"./BaseRadioButton-CGdjjGEp.js";import"./Label-CEpiLHOh.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
