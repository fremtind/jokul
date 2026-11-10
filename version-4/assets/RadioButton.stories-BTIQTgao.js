import{j as n,r as m}from"./iframe-BS9MDGvp.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-5fMCe-YZ.js";import i from"./BaseRadioButton.stories-udpZOItP.js";/* empty css               */import{F as p}from"./FieldGroup-C2HjNYu6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Xp4GbaeS.js";import"./SupportLabel-r31Q4NbO.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-gMiUn2eP.js";import"./Icon-DCgvoC6t.js";import"./BaseRadioButton-B7hm1urJ.js";import"./Label-r3YdCx0K.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
