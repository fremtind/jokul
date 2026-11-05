import{j as n,r as m}from"./iframe-2xMaBd5k.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BW1azWGO.js";import i from"./BaseRadioButton.stories-NQ4yfJ7I.js";import{F as d}from"./FieldGroup-BQdDrQC_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BaV8DBYy.js";import"./SupportLabel-yaUe-12a.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Cz4VK1PT.js";import"./Icon-DaDqDGu0.js";import"./WarningIcon-BFOhXub6.js";import"./BaseRadioButton-CjPxCX40.js";import"./Label-DEFAab_U.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
