import{j as n,r as m}from"./iframe-CW5h8cPs.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-2c9T4qqA.js";import i from"./BaseRadioButton.stories-tPMLdqxs.js";import{F as d}from"./FieldGroup-CB34cobi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BauVx3qE.js";import"./SupportLabel-B8tog-2Y.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon--E3VDzs2.js";import"./Icon-B7_2pJq7.js";import"./WarningIcon-_qlX2vkd.js";import"./BaseRadioButton-MdDSQKiW.js";import"./Label-CMpa687d.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
