import{j as n,r as m}from"./iframe-8C4cqpbl.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-rtDLAEmd.js";import i from"./BaseRadioButton.stories-BcxEsGvq.js";import{F as d}from"./FieldGroup-BYmBgkHZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bon6pId2.js";import"./SupportLabel-d1WtSLj7.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BC-NIqAa.js";import"./Icon-CBKl2Plo.js";import"./BaseRadioButton-DDO5irTX.js";import"./Label-sIEAkSUV.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
