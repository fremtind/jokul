import{j as n,r as m}from"./iframe-BxXaD8ps.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CDBzVt3V.js";import i from"./BaseRadioButton.stories-B1RkvBE3.js";/* empty css               */import{F as p}from"./FieldGroup-_x-h5o20.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BwlWezat.js";import"./SupportLabel-C3ht4Mws.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-iv-hHFrn.js";import"./Icon-BJE0_aGK.js";import"./BaseRadioButton-D-1NFUcc.js";import"./Label-BN4wka2_.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},F=["RadioButtonStory","RadioButtonGroup"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
