import{j as n,r as m}from"./iframe-CVrkxF9U.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DflRALjQ.js";import i from"./BaseRadioButton.stories-C_EPN7Et.js";import{F as d}from"./FieldGroup-C4rciU8A.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Ds2Z1Kfq.js";import"./SupportLabel-DZXCl2ef.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BLvd3hYD.js";import"./Icon-BEan_62r.js";import"./BaseRadioButton-B66ptes2.js";import"./Label-CIDaegmf.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
