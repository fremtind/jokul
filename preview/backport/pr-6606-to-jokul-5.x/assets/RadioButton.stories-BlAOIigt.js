import{j as n,r as m}from"./iframe-s8sUPN0e.js";import{c as i}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CNlPQKLZ.js";import s from"./BaseRadioButton.stories-C5U4h5K6.js";import{F as p}from"./FieldGroup-DdUX2ZNo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D73VU2bW.js";import"./SupportLabel-D5Mrt71N.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DvgIXpMf.js";import"./Icon-C0IG6nDZ.js";import"./types-IsTkoTmK.js";import"./WarningIcon-DXHopxdu.js";import"./BaseRadioButton-Dr2JNFJS.js";import"./Label-DgncUdsw.js";const E={title:"Komponenter/Radio Button",component:e,args:{...s.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:i.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
