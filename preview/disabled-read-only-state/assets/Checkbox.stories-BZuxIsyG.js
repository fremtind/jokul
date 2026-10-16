import{j as n,r as m}from"./iframe-DXRLrOxy.js";import{c as d}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-BS3KxSn-.js";import{F as i}from"./FieldGroup-BjPtrVR7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-0p61PYKC.js";import"./Label-QbC1hbI6.js";import"./SupportLabel-mJ440r0I.js";import"./SuccessIcon-hP94u6zQ.js";import"./Icon-CSRKG3LQ.js";import"./WarningIcon-B9vLvgXR.js";const S={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},r={args:{disabled:!0}},o={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},a={render:c=>n.jsx(i,{legend:"Kontaktmetoder",children:d.map(s=>m.createElement(t,{...e.args,...c,key:s,value:s,name:"kontaktmetode"},s))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
