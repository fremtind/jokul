import{j as m,r as s}from"./iframe-RvZfn1q1.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CXo27gkv.js";import{F as n}from"./FieldGroup-CDiR0DqP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Ch1X8nij.js";import"./Label-ULociDTI.js";import"./SupportLabel-OVQ0cGXh.js";import"./SuccessIcon-BDBwG57D.js";import"./Icon-C5TKyNa-.js";import"./WarningIcon-Dwsu9Vor.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
