import{j as n,r as m}from"./iframe-B0OXozOR.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CWbUsPqY.js";import i from"./BaseRadioButton.stories-DtG2VENM.js";import{F as d}from"./FieldGroup-CC0e3bTm.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lfdxMolr.js";import"./SupportLabel-BL1zmUUd.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-DHSC7y5g.js";import"./Icon-D2jnq176.js";import"./WarningIcon-CMk7LJtk.js";import"./BaseRadioButton-BOhtkAxi.js";import"./Label-B1ucgc6b.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
