import{j as m,r as s}from"./iframe-A5c2Wqvk.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-DefGNEWD.js";import{F as n}from"./FieldGroup-CRltiMYq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BqJ3Mudq.js";import"./serializeTracking-CnAc4iKu.js";import"./Label-B8MgGNDM.js";import"./SupportLabel-CkMYJ3oD.js";import"./SuccessIcon-PvcmUODX.js";import"./Icon-aN8z_x5R.js";import"./WarningIcon-BGoIXnrD.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const G=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
