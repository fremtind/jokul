import{j as n,r as m}from"./iframe-DFW0GAMD.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C2mncRBP.js";import i from"./BaseRadioButton.stories-49l1kN1U.js";import{F as d}from"./FieldGroup-D78EMnKI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CGw1NSpV.js";import"./SupportLabel-DnUd1GXo.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DNnsBuOe.js";import"./Icon-Ch_YbQB8.js";import"./BaseRadioButton-DnyiCqDS.js";import"./Label-zKtvfPpK.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
