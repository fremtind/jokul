import{j as n,r as m}from"./iframe-B_B0ix9j.js";import{c as d}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DSBr6Fdf.js";import{F as i}from"./FieldGroup-Cm7YSVeo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B3zeyXxd.js";import"./types-BlFGa32c.js";import"./Label-CBwOjwwU.js";import"./SupportLabel-ecGyHw5t.js";import"./SuccessIcon-Bd91T-IY.js";import"./Icon-BRSoH3E2.js";import"./WarningIcon-BGlrY9UE.js";import"./Text-C5toct4a.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},r={args:{disabled:!0}},o={name:"Disabled og avkrysset",args:{disabled:!0,defaultChecked:!0}},a={render:c=>n.jsx(i,{legend:"Kontaktmetoder",children:d.map(s=>m.createElement(t,{...e.args,...c,key:s,value:s,name:"kontaktmetode"},s))})},G=["CheckboxStory","Disabled","DisabledAvkrysset","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as CheckboxGroup,e as CheckboxStory,r as Disabled,o as DisabledAvkrysset,G as __namedExportsOrder,j as default};
