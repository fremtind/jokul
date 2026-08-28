import{j as n,r as m}from"./iframe-CoFMuH9Y.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CxkVKcz1.js";import i from"./BaseRadioButton.stories-D8cQaymp.js";import{F as d}from"./FieldGroup-B7ocxon1.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-zstuJjJ1.js";import"./SupportLabel-vt8MDKlu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-D2IeMGXy.js";import"./Icon-C2dEl2rv.js";import"./WarningIcon-BCSFodvX.js";import"./BaseRadioButton-BgSMDY7O.js";import"./Label-Dz_Z1gy0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
