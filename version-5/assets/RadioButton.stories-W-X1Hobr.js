import{j as n,r as m}from"./iframe-DBH5pEsm.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C8YUu7gA.js";import i from"./BaseRadioButton.stories-DzXrtmT2.js";import{F as d}from"./FieldGroup-zm_Pda74.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNu0Ug6G.js";import"./SupportLabel-CcrDK0gE.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DCQrOJdy.js";import"./Icon-Dkg2ASOF.js";import"./WarningIcon-DOrDhgOv.js";import"./BaseRadioButton-DS_ct1Oa.js";import"./Label-DS1bDqqo.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},E=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
