import{j as m,r as s}from"./iframe-CwSNRyjS.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-BYOXwT5C.js";import{F as n}from"./FieldGroup-C6QrNPS6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D59ROXkP.js";import"./types-BlFGa32c.js";import"./Label-gm9EXROs.js";import"./SupportLabel-7fWB7vbh.js";import"./SuccessIcon-CHXogH1G.js";import"./Icon-BCU2RSZD.js";import"./WarningIcon-DlhFPOfT.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const G=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
