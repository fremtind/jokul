import{j as s,r as c}from"./iframe-BAeiJg2I.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-xUmTVGpG.js";import{F as n}from"./FieldGroup-Tign5FyO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DnAYrqQB.js";import"./Label-CNmy_e27.js";import"./SupportLabel-Dcw46ClR.js";import"./WarningIcon-DF51wsE7.js";import"./Icon-B-u3l2Nb.js";const f={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>s.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>c.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const j=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,j as __namedExportsOrder,f as default};
