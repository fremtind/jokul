import{j as n,r as m}from"./iframe-D9KBidzW.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DAN6F9p5.js";import i from"./BaseRadioButton.stories-Bj2mAhNk.js";/* empty css               */import{F as p}from"./FieldGroup-C73V6EeQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CIvFW6YC.js";import"./SupportLabel-D7j85KKG.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B-D0ewEi.js";import"./Icon-B2KT17zN.js";import"./BaseRadioButton-Bvwg8hH0.js";import"./Label-CK4wdh6P.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
