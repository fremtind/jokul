import{j as c,r as s}from"./iframe-CrJ0lt5j.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-C_ApBC6x.js";import{F as n}from"./FieldGroup-B57JFWcQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CsNjwyA-.js";import"./Label-DqvLFkh5.js";import"./SupportLabel-CnciDgrG.js";import"./WarningIcon-CiCSqK69.js";import"./Icon-DGmVWH6s.js";const f={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks"}},e={name:"Checkbox"},o={render:a=>c.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const j=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,f as default};
