import{j as n,r as m}from"./iframe-D2AmJwBk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-5-bGQxAF.js";import i from"./BaseRadioButton.stories-CiNHBiCQ.js";import{F as d}from"./FieldGroup-D3ElSacT.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C6uhcE7a.js";import"./SupportLabel-DncnRvae.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Pfu4BAaV.js";import"./Icon-ZyWmcKC_.js";import"./WarningIcon-BgtgQxqE.js";import"./BaseRadioButton-C7VcBdY2.js";import"./Label-DEAINvVt.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
