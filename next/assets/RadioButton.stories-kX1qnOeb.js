import{j as n,r as m}from"./iframe-DpX2Qt8H.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-C3_Lojva.js";import i from"./BaseRadioButton.stories-BYryMupA.js";import{F as d}from"./FieldGroup-D7DLNgyr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BNZiz7BJ.js";import"./SupportLabel-BrNbJtsg.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-BGYZp8Y6.js";import"./Icon-B5QPbRc4.js";import"./WarningIcon-NfqbBr7y.js";import"./BaseRadioButton-DUP1Ub-d.js";import"./Label-B9YwN9mf.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
