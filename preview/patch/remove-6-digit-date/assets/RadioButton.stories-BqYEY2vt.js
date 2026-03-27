import{j as n,r as m}from"./iframe-CQmNNGDV.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DkB2VBdJ.js";import i from"./BaseRadioButton.stories-CdVnC3qL.js";import{F as d}from"./FieldGroup-BQXG1iKN.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BhcYcPMJ.js";import"./SupportLabel-fiM23Puw.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-C8FbzSKe.js";import"./Icon-C6yq4Lol.js";import"./BaseRadioButton-ILXTBD7Z.js";import"./Label--PSB1gsd.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
