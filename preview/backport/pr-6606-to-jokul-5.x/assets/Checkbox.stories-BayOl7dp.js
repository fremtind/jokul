import{j as m,r as s}from"./iframe-Cd58-eiO.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CxAcMBIf.js";import{F as n}from"./FieldGroup-BbQe26Mc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-x49vx7R9.js";import"./types-IsTkoTmK.js";import"./Label-Dj74iRke.js";import"./SupportLabel-BAvqvobB.js";import"./SuccessIcon-BAJX7sQa.js";import"./Icon-5Ollpz7g.js";import"./WarningIcon-CZpWc3K5.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
