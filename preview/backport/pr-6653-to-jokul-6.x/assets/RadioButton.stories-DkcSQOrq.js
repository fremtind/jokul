import{j as n,r as m}from"./iframe-Cff8_9Is.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D_MxjXw6.js";import i from"./BaseRadioButton.stories-D6yCm-Rj.js";import{F as d}from"./FieldGroup-D3hjBcs2.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CcgHn3PK.js";import"./SupportLabel-CLO4rMx9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DEKZ51Ij.js";import"./Icon-BT5rrgpX.js";import"./WarningIcon-F7xSy4CF.js";import"./BaseRadioButton-DZ7fWLiE.js";import"./Label-Dm2I-h9K.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
