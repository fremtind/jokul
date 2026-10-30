import{j as n,r as m}from"./iframe-0NfDhzIt.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C4SvUPqB.js";import i from"./BaseRadioButton.stories-D-_E6Yep.js";import{F as d}from"./FieldGroup-B5Ai9Mz8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CYFmze6q.js";import"./SupportLabel-DFOwp_1b.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B_K_3w8M.js";import"./Icon-doX1XryJ.js";import"./WarningIcon-CeLtkF4T.js";import"./BaseRadioButton-_daJyphv.js";import"./Label-DxKaM3x-.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
