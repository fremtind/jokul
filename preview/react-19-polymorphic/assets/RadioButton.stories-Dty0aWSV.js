import{j as n,r as m}from"./iframe-D3Lv_WI2.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-NcLqMiHS.js";import i from"./BaseRadioButton.stories-DFjcBipU.js";import{F as d}from"./FieldGroup-DIQ6v1Xv.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-aqw_VwLw.js";import"./SupportLabel-CitaAmyH.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cn3XzSRF.js";import"./Icon-WCV8x0nX.js";import"./BaseRadioButton-Bugsd6Me.js";import"./Label-CpncKAf4.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
