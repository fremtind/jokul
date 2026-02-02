import{j as n,r as m}from"./iframe-qzPpoKpx.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-9JAeEGJE.js";import i from"./BaseRadioButton.stories-CxHrCBJ_.js";import{F as d}from"./FieldGroup-1OB2wnP6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNUUO0QD.js";import"./SupportLabel-CiTcR3Ub.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C1XzLhPH.js";import"./Icon-BjOLH1hg.js";import"./BaseRadioButton-CLNWhh-m.js";import"./Label-vCzN8szW.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
