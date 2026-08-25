import{j as m,r as s}from"./iframe-DUSK3EL0.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DwgG7Lvl.js";import{F as n}from"./FieldGroup-CSpAY2FA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BWR4YtCt.js";import"./Label-CGfkNRAN.js";import"./SupportLabel-BWHNu2on.js";import"./SuccessIcon-31L3ixE1.js";import"./Icon-OvV2KghW.js";import"./WarningIcon-CwQuELVA.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
