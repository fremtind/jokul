import{j as n,r as m}from"./iframe-DUChWzSY.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CZtCwDaD.js";import i from"./BaseRadioButton.stories-DG3jN8v8.js";import{F as d}from"./FieldGroup-CSZCC-vj.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BK1d0HEG.js";import"./SupportLabel-CNeNC5yH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BsyFJdVS.js";import"./Icon-CmLcQq9R.js";import"./WarningIcon-Ba9j6T87.js";import"./BaseRadioButton-DN5PUkmP.js";import"./Label-DewuWoLp.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
