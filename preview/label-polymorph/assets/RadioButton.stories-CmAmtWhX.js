import{j as n,r as m}from"./iframe-BU_jiWCV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B0bJstJP.js";import i from"./BaseRadioButton.stories-YQ8cDQo6.js";import{F as d}from"./FieldGroup-BkuWikkg.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D_a0m0IF.js";import"./SupportLabel-DQb_eXfm.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-theVSf6h.js";import"./Icon-DZVy4Pvr.js";import"./BaseRadioButton-BD3f7I2x.js";const S={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const h=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,h as __namedExportsOrder,S as default};
