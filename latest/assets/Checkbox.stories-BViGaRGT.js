import{j as m,r as s}from"./iframe-Di3ffKTP.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DQ_2lOxD.js";import{F as n}from"./FieldGroup-BXQ8id-I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-C3bTmqGz.js";import"./Label-dJA30Sj3.js";import"./SupportLabel-Nr1x9upU.js";import"./SuccessIcon-B_7Ws1aU.js";import"./Icon-DJ7eB7hM.js";import"./WarningIcon-ztgYcCBH.js";const j={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},y=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,y as __namedExportsOrder,j as default};
