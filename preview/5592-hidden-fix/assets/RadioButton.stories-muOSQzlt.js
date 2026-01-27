import{j as n,r as m}from"./iframe-B_z1kba_.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-uJYYqo7q.js";import i from"./BaseRadioButton.stories-C3Qzzhbh.js";import{F as d}from"./FieldGroup-BVEtMIm_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DqYU3Rno.js";import"./SupportLabel-CxzeBLI0.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C7vS_pv0.js";import"./Icon-BTvp5Q0s.js";import"./BaseRadioButton-CL0IiAZw.js";import"./Label-aJBLtaen.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
