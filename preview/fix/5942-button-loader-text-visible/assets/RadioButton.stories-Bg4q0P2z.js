import{j as n,r as m}from"./iframe-WFbU83V-.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-51h3hgP9.js";import i from"./BaseRadioButton.stories-Bkp4a_c5.js";/* empty css               */import{F as p}from"./FieldGroup-DmMahY27.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CGpnuWyk.js";import"./SupportLabel-BGmoCJc7.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-D308-6pj.js";import"./Icon-Bdko5L71.js";import"./BaseRadioButton-D21c_gMb.js";import"./Label-BNWUEU42.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
