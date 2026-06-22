import{j as s,r as m}from"./iframe-B9B2iQPq.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-D2mwbe8v.js";import{F as n}from"./FieldGroup-Dpn7bkp_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-COaKV4T_.js";import"./Label-CqUGzVVy.js";import"./SupportLabel-DE-BUjrK.js";import"./SuccessIcon-BlA4v25Z.js";import"./Icon-DOYMQfkf.js";import"./WarningIcon-BhhhauDK.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={},o={render:a=>s.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>m.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const y=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
