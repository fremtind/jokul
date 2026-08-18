import{j as n,r as m}from"./iframe-CymKDTpX.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dv6pDQqb.js";import i from"./BaseRadioButton.stories-Cw2P2zpP.js";import{F as d}from"./FieldGroup-wW7HqDZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-75Okue5l.js";import"./SupportLabel-DvKKe89v.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-nC2UDNE5.js";import"./Icon-Dwk9HSLK.js";import"./WarningIcon-BDz9MmxV.js";import"./BaseRadioButton-DYpIBoJK.js";import"./Label-k8cB8FTt.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
