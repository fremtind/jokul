import{j as n,r as m}from"./iframe-D9kSFuA9.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BKhikdVE.js";import i from"./BaseRadioButton.stories-DRhELqQS.js";import{F as d}from"./FieldGroup-DuHWlwOf.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D22LZ5n7.js";import"./SupportLabel-bo2zjcax.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CIFt1Ycj.js";import"./Icon-BLapKwvt.js";import"./WarningIcon-BtWrpef4.js";import"./BaseRadioButton-CFjQ7SV2.js";import"./Label-D8ZibVYC.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
