import{j as s,r as c}from"./iframe-D0NguVD0.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-C6N0XZcm.js";import{F as p}from"./FieldGroup-Ddi8b70P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-nj3l-fu7.js";import"./SupportLabel-D75GXo0H.js";import"./SuccessIcon-Bb8CEv9l.js";import"./Icon-Bh7HbNsV.js";import"./WarningIcon-DTHTu0uj.js";import"./Label-LMyFIrIY.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1,errorLabel:""}},e={name:"Checkbox"},r={render:({errorLabel:a,...n})=>s.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:m.map(o=>c.createElement(t,{...e.args,...n,key:o,value:o,name:"kontaktmetode"},o))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: ({
    errorLabel,
    ...args
  }: CheckboxStoryArgs) => <FieldGroup legend={"Kontaktmetoder"} errorLabel={errorLabel}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...r.parameters?.docs?.source}}};const j=["CheckboxStory","CheckboxGroup"];export{r as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,S as default};
