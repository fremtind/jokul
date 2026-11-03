import{j as n,r as m}from"./iframe-CwMi-LWz.js";import{c as d}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-BkFfrOE4.js";import{F as i}from"./FieldGroup-BK7FAZMy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-baGuwUQf.js";import"./Label-KW6JEFw5.js";import"./SupportLabel-CEFx3_QF.js";import"./SuccessIcon-DAFx1k_d.js";import"./Icon-Cfb6jpTd.js";import"./WarningIcon-BM9lb_MD.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},r={args:{disabled:!0}},o={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},a={render:c=>n.jsx(i,{legend:"Kontaktmetoder",children:d.map(s=>m.createElement(t,{...e.args,...c,key:s,value:s,name:"kontaktmetode"},s))})},D=["CheckboxStory","Disabled","DisabledAvkrysset","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Disabled og avkrysset",
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...a.parameters?.docs?.source}}};export{a as CheckboxGroup,e as CheckboxStory,r as Disabled,o as DisabledAvkrysset,D as __namedExportsOrder,S as default};
