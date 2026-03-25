import{j as n,r as m}from"./iframe-D47ECc-i.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CxcjbcKD.js";import i from"./BaseRadioButton.stories-BkqokK5W.js";import{F as d}from"./FieldGroup-FepYQeHp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-4j4sAaIk.js";import"./SupportLabel-Ck7P2EuR.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DZ1D_bMR.js";import"./Icon-25eR-AS8.js";import"./BaseRadioButton-DL4KBtH8.js";import"./Label-DzB9zIsI.js";const h={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,h as default};
