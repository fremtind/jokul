import{j as n,r as m}from"./iframe-B7WCfH1h.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-Bz7U_elH.js";import i from"./BaseRadioButton.stories-D7Q8nxb9.js";/* empty css               */import{F as p}from"./FieldGroup-D10A3lmi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-9z4367v-.js";import"./SupportLabel-DIQ4aPA3.js";import"./clsx-B-dksMZM.js";import"./WarningIcon-BfwHghw7.js";import"./Icon-Be07sP4R.js";import"./BaseRadioButton-WJfY5ykC.js";import"./Label-B8tjKPu7.js";const E={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const F=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,F as __namedExportsOrder,E as default};
