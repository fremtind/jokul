import{j as s,r as c}from"./iframe-BIRCofEu.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-mkL3gcBb.js";import{F as p}from"./FieldGroup-CTpItwj7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CURndpk8.js";import"./Label-B0DKykiW.js";import"./SupportLabel-CGlAz5yK.js";import"./SuccessIcon-B7rGBX8s.js";import"./Icon-BFmXdsOK.js";import"./WarningIcon-Dm9fxrCk.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1,errorLabel:""}},e={name:"Checkbox"},r={render:({errorLabel:a,...n})=>s.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:m.map(o=>c.createElement(t,{...e.args,...n,key:o,value:o,name:"kontaktmetode"},o))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
