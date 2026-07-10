import{j as n,r as m}from"./iframe-DtR4IeDC.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-kgoSB9L5.js";import i from"./BaseRadioButton.stories-Bk7FWNsH.js";import{F as d}from"./FieldGroup-DBc4e2uR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BypAmoXi.js";import"./SupportLabel-BE5ZC0Fe.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-YqObsPMx.js";import"./Icon-090sEyNP.js";import"./WarningIcon-BONq29A0.js";import"./BaseRadioButton-JakfrRWx.js";import"./Label-CVc8k_pc.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
