import{j as n,r as m}from"./iframe-BoY3t5WQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BJ7YjX6z.js";import i from"./BaseRadioButton.stories-Bus2v-py.js";/* empty css               */import{F as p}from"./FieldGroup-47rLWOSi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CBtDWUmk.js";import"./SupportLabel-i0F-Hmsu.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-ns1Atsrd.js";import"./Icon-CG9f-6Uy.js";import"./WarningIcon-_DRD_p4Z.js";import"./BaseRadioButton-Dl_0S5tG.js";import"./Label-B9ADCcbP.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
