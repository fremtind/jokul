import{j as n,r as m}from"./iframe-Bs6w1lhj.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-D5dqFr2N.js";import i from"./BaseRadioButton.stories-Y4Z_xTzv.js";/* empty css               */import{F as p}from"./FieldGroup-BcfBsKQ_.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-6PEzRPFE.js";import"./SupportLabel-Dk4VKl7V.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-Cd87iNbi.js";import"./Icon-CVhsl-RP.js";import"./BaseRadioButton-D8DH5svp.js";import"./Label-7Y4vIPZu.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
