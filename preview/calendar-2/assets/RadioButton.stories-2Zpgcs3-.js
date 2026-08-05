import{j as n,r as m}from"./iframe-D25vO16l.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dae3G4cp.js";import i from"./BaseRadioButton.stories-aHoQBcV0.js";import{F as d}from"./FieldGroup-d8Q1y-wt.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BU4_SoFw.js";import"./SupportLabel-LNZhCInP.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DoNkeGsh.js";import"./Icon-BZ6ETrRV.js";import"./WarningIcon-CKMdT3HT.js";import"./BaseRadioButton-tOer9J5G.js";import"./Label-BQyeSw3U.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
