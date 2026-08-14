import{j as n,r as m}from"./iframe-DQjgGy3g.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-CMh9cmPX.js";import i from"./BaseRadioButton.stories-DGaNMB13.js";import{F as d}from"./FieldGroup-YAv8Qig4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BJ9l4j2H.js";import"./SupportLabel-DvlymRlE.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-CQhE3qpm.js";import"./Icon-UROKWZdp.js";import"./WarningIcon-C3YqVB8y.js";import"./BaseRadioButton-B7EUXdgr.js";import"./Label-HvIAyWgH.js";const v={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button",value:"radio-button"}},o={name:"Radio Button"},t={render:a=>n.jsx(d,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const E=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,E as __namedExportsOrder,v as default};
