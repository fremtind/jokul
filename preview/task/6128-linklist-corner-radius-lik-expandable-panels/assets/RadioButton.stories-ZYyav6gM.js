import{j as n,r as m}from"./iframe-D3hA9N4T.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-DWINyPc5.js";import i from"./BaseRadioButton.stories-CfYJ38mM.js";/* empty css               */import{F as p}from"./FieldGroup-CHkNPf4z.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CPlBK1o9.js";import"./SupportLabel-CsclqNQb.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-B2Sl5R19.js";import"./Icon-yBmoOvAX.js";import"./BaseRadioButton-NuLaaTxs.js";import"./Label-CXvXJ3_C.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
