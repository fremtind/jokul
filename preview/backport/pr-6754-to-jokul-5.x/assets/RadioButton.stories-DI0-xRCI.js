import{j as n,r as m}from"./iframe-C2einBPe.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CJ-sJ3SD.js";import i from"./BaseRadioButton.stories-Q-3hTTrv.js";import{F as d}from"./FieldGroup-DEqGGXty.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-OCDVfklI.js";import"./SupportLabel-BlVuUyH5.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-B-XWQNNQ.js";import"./Icon-CqF4d1J8.js";import"./WarningIcon-Bl3-CWhK.js";import"./BaseRadioButton-_eDYpbfT.js";import"./Label-BfxKL9aB.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
