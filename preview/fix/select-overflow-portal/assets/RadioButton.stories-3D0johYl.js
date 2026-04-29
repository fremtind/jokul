import{j as n,r as m}from"./iframe-WXv0fpCY.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D48LL2bm.js";import i from"./BaseRadioButton.stories-KH70cFR-.js";/* empty css               */import{F as p}from"./FieldGroup-CBcV_XD8.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DVWsPhen.js";import"./SupportLabel-CV4iQbDB.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DxWWTx50.js";import"./Icon-DT8HZc9V.js";import"./BaseRadioButton-C3eDQc1U.js";import"./Label-B4miLtxc.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
