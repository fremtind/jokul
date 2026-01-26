import{j as n,r as m}from"./iframe-DtM7RXj6.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BDd8q_CW.js";import i from"./BaseRadioButton.stories-CIVH8C3F.js";import{F as d}from"./FieldGroup-CwRx3Awk.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CC-388Ss.js";import"./SupportLabel-DyJuzdLr.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bz0badf_.js";import"./Icon-DEBh_q2D.js";import"./BaseRadioButton-ri6ICuV4.js";import"./Label-ByAl5DiS.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
