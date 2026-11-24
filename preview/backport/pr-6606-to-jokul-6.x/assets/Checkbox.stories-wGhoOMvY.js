import{j as m,r as s}from"./iframe-C-ypBE70.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DaUBTq9N.js";import{F as n}from"./FieldGroup-1lkaRwad.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B8BlCDSA.js";import"./types-BlFGa32c.js";import"./Label-DTdlpVx_.js";import"./SupportLabel-D_kq0xk5.js";import"./SuccessIcon-Dgakuara.js";import"./Icon-Cu4AHOkf.js";import"./WarningIcon-CeEg-qws.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
