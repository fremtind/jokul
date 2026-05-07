import{j as n,r as m}from"./iframe-tQ4G7g9A.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-iEouDXk3.js";import i from"./BaseRadioButton.stories-CegB66YJ.js";import{F as d}from"./FieldGroup-7xQyJfvA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-C1FrNwDf.js";import"./SupportLabel-Ca_Owtq8.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BPTLbP6c.js";import"./Icon-COXTUEtO.js";import"./BaseRadioButton-DLMwcGa1.js";import"./Label-DkfCftNo.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
