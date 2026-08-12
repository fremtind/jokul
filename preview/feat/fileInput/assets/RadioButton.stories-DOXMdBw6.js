import{j as n,r as m}from"./iframe-BKapNlwk.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BgKTZxaC.js";import i from"./BaseRadioButton.stories-B_7D9jDw.js";import{F as d}from"./FieldGroup-CuK9GN6M.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CkrH1w3r.js";import"./SupportLabel-CNTgslNG.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-RMbvCidx.js";import"./Icon-DKTpCZ-c.js";import"./WarningIcon-UPBixir2.js";import"./BaseRadioButton-Baa6hSkK.js";import"./Label-B-RkLtZp.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
