import{j as n,r as m}from"./iframe-D0mmy7KP.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Cy_p2_tT.js";import i from"./BaseRadioButton.stories-BLeb2Aab.js";import{F as d}from"./FieldGroup-BFKefgjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D80U0ce-.js";import"./SupportLabel-BZ0sGATm.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D-zb31_Q.js";import"./Icon-B-z4-92b.js";import"./WarningIcon-B8IQVrqb.js";import"./BaseRadioButton-BNoPytrT.js";import"./Label-BE1mAgeu.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
