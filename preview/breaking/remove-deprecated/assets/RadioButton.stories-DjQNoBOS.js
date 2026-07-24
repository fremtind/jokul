import{j as n,r as m}from"./iframe-DoW9j8BH.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-gYubJ_0_.js";import i from"./BaseRadioButton.stories-CA5UZslP.js";import{F as d}from"./FieldGroup-priSB5uj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CaK2Is8H.js";import"./SupportLabel-CXz7XwTX.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-XNHNdUwW.js";import"./Icon-Dr-nHL-f.js";import"./WarningIcon-CBDphsKY.js";import"./BaseRadioButton-DwTP0j0a.js";import"./Label-D9X1g914.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
