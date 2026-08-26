import{j as m,r as s}from"./iframe-DLQRFuRu.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-BeuyF2i5.js";import{F as n}from"./FieldGroup-C7c-SDGQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CyP4rD9-.js";import"./Label-CL_cA6vL.js";import"./SupportLabel-8E_dZTLj.js";import"./SuccessIcon-yZX4g4Yk.js";import"./Icon-MpdY__nX.js";import"./WarningIcon-E6zVN4J6.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
