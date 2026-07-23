import{j as n,r as m}from"./iframe-Bs2ZEwwT.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-A2EjETb4.js";import i from"./BaseRadioButton.stories-GsdK5aC9.js";import{F as d}from"./FieldGroup-CKKMdmhd.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CVc_TE9Z.js";import"./SupportLabel-DD1h3dlP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Gd7hNHf-.js";import"./Icon-C7s4gIxg.js";import"./WarningIcon-D--lXmJJ.js";import"./BaseRadioButton-D3gmr9Iq.js";import"./Label-BaAE2F6s.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
