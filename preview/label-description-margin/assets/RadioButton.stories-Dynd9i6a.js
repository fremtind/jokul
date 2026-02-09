import{j as n,r as m}from"./iframe-rOKMGclQ.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BEAn4G0o.js";import i from"./BaseRadioButton.stories-H8B4PCMv.js";import{F as d}from"./FieldGroup-Bo428QDM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CBnP05n3.js";import"./SupportLabel-w7Nvr05u.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BG9uJQpv.js";import"./Icon-B2v-MAqb.js";import"./BaseRadioButton-BgkLDIYY.js";import"./Label-D1Gjok3_.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
