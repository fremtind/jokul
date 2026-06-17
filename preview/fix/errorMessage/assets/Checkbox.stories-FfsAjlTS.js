import{j as s,r as c}from"./iframe-DW3e9-7K.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CzZEZuRf.js";import{F as p}from"./FieldGroup-DxjUR3Gn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-ukZfM2JJ.js";import"./SupportLabel-DN6Y5ht3.js";import"./SuccessIcon-D_dk47XL.js";import"./Icon-vjKgXSRv.js";import"./WarningIcon-rzLA1h-n.js";import"./Label-mZQVCVTl.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1,errorLabel:""}},e={name:"Checkbox"},r={render:({errorLabel:a,...n})=>s.jsx(p,{legend:"Kontaktmetoder",errorLabel:a,children:m.map(o=>c.createElement(t,{...e.args,...n,key:o,value:o,name:"kontaktmetode"},o))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
