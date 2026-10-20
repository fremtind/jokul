import{j as n,r as m}from"./iframe-CExNQTwL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DNqvMTgR.js";import i from"./BaseRadioButton.stories-B0ie5pMm.js";import{F as d}from"./FieldGroup-DY8zUY7l.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-NPzug_rM.js";import"./SupportLabel-DSt1pslH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CufdWbrK.js";import"./Icon-DD5Y54mP.js";import"./WarningIcon-w7dUcqyV.js";import"./BaseRadioButton-BUW-paWW.js";import"./Label-DDcs5TJ7.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
