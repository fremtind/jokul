import{j as c,r as s}from"./iframe-BeW8231r.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-mDn20XyW.js";import{F as n}from"./FieldGroup-D9WtPkxt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CD2qvuFc.js";import"./Label-CR2FVV2F.js";import"./SupportLabel-vE8N1Zgi.js";import"./WarningIcon-BjIpl0Xz.js";import"./Icon-C2YR2oDk.js";const f={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks"}},e={name:"Checkbox"},o={render:a=>c.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const j=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,f as default};
