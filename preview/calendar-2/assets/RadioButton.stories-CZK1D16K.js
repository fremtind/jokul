import{j as n,r as m}from"./iframe-DYWdyUxL.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CocuqW4k.js";import i from"./BaseRadioButton.stories-Dl_3YyXx.js";import{F as d}from"./FieldGroup-CfC7YfgY.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BOzEIjuC.js";import"./SupportLabel-CetoG6I3.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-Dw5XGk7M.js";import"./Icon-DdnKr8pm.js";import"./WarningIcon-xab_nx70.js";import"./BaseRadioButton-6cIcPQIg.js";import"./Label-C_9a0mP0.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
