import{j as n,r as m}from"./iframe-gVRbMT1N.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Gh--PQ8m.js";import i from"./BaseRadioButton.stories-C43z6Ahx.js";/* empty css               */import{F as p}from"./FieldGroup-DZ51f7Fy.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CzUpCoL2.js";import"./SupportLabel-C_QdnWJx.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CtoZgKvg.js";import"./Icon-C_5cFtPz.js";import"./BaseRadioButton-DvkFE_ti.js";import"./Label-yz4I4TX9.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
