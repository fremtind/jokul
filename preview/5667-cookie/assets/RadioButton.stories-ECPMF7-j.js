import{j as n,r as m}from"./iframe-CVHzTe_x.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Dg5DMmn_.js";import i from"./BaseRadioButton.stories-CWpOEih6.js";import{F as d}from"./FieldGroup-D0EqTe-K.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DWQMXXcN.js";import"./SupportLabel-CAyi8uOZ.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Bw3uqpvt.js";import"./Icon-B1EN5nOE.js";import"./BaseRadioButton-D7x1P7l1.js";import"./Label-D9VuzQRu.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
