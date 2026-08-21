import{j as n,r as m}from"./iframe-D3J2_g0M.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Djo1nFa8.js";import i from"./BaseRadioButton.stories-B8CA0VG7.js";import{F as d}from"./FieldGroup-C_dL-NU9.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ryfhRN2p.js";import"./SupportLabel-BB_aX62A.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CaPc-HrJ.js";import"./Icon-CyH0b_AD.js";import"./WarningIcon-BgSX5bH-.js";import"./BaseRadioButton-CjK4Gi6f.js";import"./Label-D-K4YhW9.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
