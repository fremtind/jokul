import{j as n,r as m}from"./iframe-B2b8ayvw.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Czi6CiNG.js";import i from"./BaseRadioButton.stories-7otQflcz.js";import{F as d}from"./FieldGroup-BLGq1jJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-92lB6jSG.js";import"./SupportLabel-Bp-6a4RL.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BSDF1r7A.js";import"./Icon-CEKhj8Bs.js";import"./WarningIcon-zBWN69cl.js";import"./BaseRadioButton-Qn3WGWYb.js";import"./Label-Dfo4wJRg.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
