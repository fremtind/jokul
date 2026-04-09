import{j as n,r as m}from"./iframe-CHUBw1f3.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DhBDelJ3.js";import i from"./BaseRadioButton.stories-BJJRh67f.js";/* empty css               */import{F as p}from"./FieldGroup-jMzSCXFG.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-n9ItmfG5.js";import"./SupportLabel-D8QtH34J.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D3EDGG0R.js";import"./Icon-C01bq3--.js";import"./BaseRadioButton-MZwpsB9N.js";import"./Label-gvvQLaIz.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
