import{j as n,r as m}from"./iframe-BtDFJkP8.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-BsJxHF72.js";import i from"./BaseRadioButton.stories-WVJAk6Yn.js";/* empty css               */import{F as p}from"./FieldGroup-EE3iXY-x.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D1j841OR.js";import"./SupportLabel-B3Q5-BiR.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-DmR8AMNG.js";import"./Icon-D5FzVccS.js";import"./BaseRadioButton-D7BwqZRn.js";import"./Label-DdqonU-t.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
