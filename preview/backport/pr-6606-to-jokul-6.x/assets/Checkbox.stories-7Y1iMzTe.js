import{j as m,r as s}from"./iframe-BSOWj6-v.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-C7YqcJxJ.js";import{F as n}from"./FieldGroup-CWc_XqNS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CeGlSt-h.js";import"./types-BlFGa32c.js";import"./Label-DO_kdEPk.js";import"./SupportLabel-b-7SeMRT.js";import"./SuccessIcon-4GMyiaev.js";import"./Icon-C365w0L3.js";import"./WarningIcon-BduEda9f.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
