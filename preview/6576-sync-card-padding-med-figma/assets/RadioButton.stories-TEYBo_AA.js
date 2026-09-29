import{j as n,r as m}from"./iframe-C06Lom9o.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BgdbXiVj.js";import i from"./BaseRadioButton.stories-CyLks50K.js";import{F as d}from"./FieldGroup-BcHqfKlL.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Z1RQ73e2.js";import"./SupportLabel-BH0y_1h9.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BZ90b79J.js";import"./Icon-DE2-7qg0.js";import"./WarningIcon-CaiymGyM.js";import"./BaseRadioButton-CeaRZxFQ.js";import"./Label-Do7PvgL2.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
