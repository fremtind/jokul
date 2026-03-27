import{j as s,r as c}from"./iframe-ClV8r1rj.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-jzLtjxO7.js";import{F as n}from"./FieldGroup-BYOJ4tVk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CuB9eMUJ.js";import"./Label-3ydZK_fE.js";import"./SupportLabel-DYpzVXnO.js";import"./WarningIcon-Dz1LOBg9.js";import"./Icon-t4H11urd.js";const f={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>s.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>c.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const j=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,f as default};
