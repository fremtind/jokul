import{j as n,r as m}from"./iframe-CP-IjQrv.js";import{c as d}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-zdGTm-xr.js";import{F as i}from"./FieldGroup-n1uLUBkH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cn0qH6J3.js";import"./Label-Dt7baxze.js";import"./SupportLabel-CaoOG4nj.js";import"./SuccessIcon-CIubNwDC.js";import"./Icon-D_iovIj6.js";import"./WarningIcon-DjqjKvB_.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},r={args:{disabled:!0}},o={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},a={render:c=>n.jsx(i,{legend:"Kontaktmetoder",children:d.map(s=>m.createElement(t,{...e.args,...c,key:s,value:s,name:"kontaktmetode"},s))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const D=["CheckboxStory","Disabled","DisabledAvkrysset","CheckboxGroup"];export{a as CheckboxGroup,e as CheckboxStory,r as Disabled,o as DisabledAvkrysset,D as __namedExportsOrder,S as default};
