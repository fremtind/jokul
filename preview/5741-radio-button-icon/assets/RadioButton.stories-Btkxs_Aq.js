import{j as n,r as m}from"./iframe-CrJ0lt5j.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BxAIhHLw.js";import i from"./BaseRadioButton.stories-ChjYf-gH.js";import{F as d}from"./FieldGroup-B57JFWcQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CsNjwyA-.js";import"./SupportLabel-CnciDgrG.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-CiCSqK69.js";import"./Icon-DGmVWH6s.js";import"./BaseRadioButton-DZP4v6Zn.js";import"./Label-DqvLFkh5.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
