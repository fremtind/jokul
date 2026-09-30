import{j as n,r as m}from"./iframe-CrtqObXF.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4Ku6hiW.js";import i from"./BaseRadioButton.stories-CpSL5Nqx.js";import{F as d}from"./FieldGroup-DyQbmWrU.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D39ab4oe.js";import"./SupportLabel-DOXwCj07.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DR6nhqnR.js";import"./Icon-DR26e1r8.js";import"./WarningIcon-CK50D047.js";import"./BaseRadioButton-Ds8SX-pU.js";import"./Label-BeV6nw6Y.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
