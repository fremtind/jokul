import{j as n,r as m}from"./iframe-CMhLyFqE.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{R as e}from"./RadioButton-B6NwpVys.js";import i from"./BaseRadioButton.stories-1jS_42w6.js";/* empty css               */import{F as p}from"./FieldGroup-MEcEAyVR.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-B2LHU1_w.js";import"./SupportLabel-SJrzPZsH.js";import"./clsx-B-dksMZM.js";import"./SuccessIcon-AbHL2Qv_.js";import"./Icon-BU7vsafa.js";import"./WarningIcon-BjUJC57c.js";import"./BaseRadioButton--9-CNxvA.js";import"./Label-sIfwelQs.js";const F={title:"Komponenter/Radio Button",component:e,args:{...i.args,children:"Radio button"}},o={name:"Radio Button"},t={render:a=>n.jsx(p,{legend:"Kontaktmetoder",children:s.map(r=>m.createElement(e,{...o.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio Button"
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <RadioButton {...RadioButtonStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </RadioButton>)}
        </FieldGroup>
}`,...t.parameters?.docs?.source}}};const j=["RadioButtonStory","RadioButtonGroup"];export{t as RadioButtonGroup,o as RadioButtonStory,j as __namedExportsOrder,F as default};
