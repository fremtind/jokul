import{j as n,r as m}from"./iframe-C2SJlguE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Clm09rgO.js";import i from"./BaseRadioButton.stories-Dk11Tfhu.js";import{F as d}from"./FieldGroup-BEw-gTNf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Cbow8HzJ.js";import"./SupportLabel-DnXvgUus.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CiI8CUWl.js";import"./Icon-KG6BoLha.js";import"./WarningIcon-PI7Yx1iW.js";import"./BaseRadioButton-DVyVCneB.js";import"./Label-h8v0d8Dm.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
