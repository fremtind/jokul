import{j as c,r as s}from"./iframe-BU_jiWCV.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-CsQAS1bJ.js";import{F as n}from"./FieldGroup-BkuWikkg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D_a0m0IF.js";import"./SupportLabel-DQb_eXfm.js";import"./WarningIcon-theVSf6h.js";import"./Icon-DZVy4Pvr.js";const g={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks"}},e={name:"Checkbox"},o={render:a=>c.jsx(n,{legend:"Kontaktmetoder",children:m.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};const f=["CheckboxStory","CheckboxGroup"];export{o as CheckboxGroup,e as CheckboxStory,f as __namedExportsOrder,g as default};
