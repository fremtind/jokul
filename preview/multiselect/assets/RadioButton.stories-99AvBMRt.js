import{j as n,r as m}from"./iframe-B3OBNPfZ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-9sZTnqvf.js";import i from"./BaseRadioButton.stories-W0r7vPHT.js";import{F as d}from"./FieldGroup-OQF6L8uK.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CTTBrnb0.js";import"./SupportLabel-CdvBOKd1.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-JpeI1IXf.js";import"./Icon-Bgejj3-4.js";import"./WarningIcon-Ch14NOxE.js";import"./BaseRadioButton-zO1n8P0T.js";import"./Label-CXz6xjLA.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
