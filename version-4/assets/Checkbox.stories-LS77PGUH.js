import{j as s,r as c}from"./iframe-2ssKPK5p.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CmFkRnHA.js";import{F as n}from"./FieldGroup-ClkklsgD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-y4WqJUQb.js";import"./Label-Bg48KiXx.js";import"./SupportLabel-CQnfgEX3.js";import"./WarningIcon-CajbV473.js";import"./Icon-Bux7J4HQ.js";const f={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>s.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>c.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},j=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,f as default};
