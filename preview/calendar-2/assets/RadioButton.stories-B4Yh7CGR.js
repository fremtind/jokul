import{j as n,r as m}from"./iframe-D3RJL4M1.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BrlbrQo2.js";import i from"./BaseRadioButton.stories-CAiKfe-u.js";import{F as d}from"./FieldGroup-DOqVi_Rb.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BggpRGDG.js";import"./SupportLabel-C58wAoaC.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DX1TjtrF.js";import"./Icon-DGAn_6a2.js";import"./WarningIcon-Dkev5qh8.js";import"./BaseRadioButton-SMDthhWL.js";import"./Label-Drb59-I7.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
