import{j as n,r as m}from"./iframe-ieofgYFi.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DctIEJRr.js";import i from"./BaseRadioButton.stories-IxAm5Tjj.js";import{F as d}from"./FieldGroup-BmwlcAK4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C36W5-t_.js";import"./SupportLabel-B85GSPHH.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DCYt2wio.js";import"./Icon-BWQwdfZi.js";import"./BaseRadioButton-DNP3LrUO.js";import"./Label-CxWb8KZU.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
