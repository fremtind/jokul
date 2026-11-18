import{j as m,r as s}from"./iframe-s8sUPN0e.js";import{c}from"./contactChoices-BqDGeJnV.js";import{C as t}from"./Checkbox-D9ZqnNT1.js";import{F as n}from"./FieldGroup-DdUX2ZNo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D73VU2bW.js";import"./types-IsTkoTmK.js";import"./Label-DgncUdsw.js";import"./SupportLabel-D5Mrt71N.js";import"./SuccessIcon-DvgIXpMf.js";import"./Icon-C0IG6nDZ.js";import"./WarningIcon-DXHopxdu.js";const y={title:"Komponenter/Checkbox",component:t,args:{value:"kjekk",name:"checkbox",children:"Kjekk boks",indeterminate:!1}},e={name:"Checkbox"},o={render:a=>m.jsx(n,{legend:"Kontaktmetoder",children:c.map(r=>s.createElement(t,{...e.args,...a,key:r,value:r,name:"kontaktmetode"},r))})},G=["CheckboxStory","CheckboxGroup"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Checkbox"
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <FieldGroup legend={"Kontaktmetoder"}>
            {contactChoices.map(value => <Checkbox {...CheckboxStory.args} {...args} key={value} value={value} name="kontaktmetode">
                    {value}
                </Checkbox>)}
        </FieldGroup>
}`,...o.parameters?.docs?.source}}};export{o as CheckboxGroup,e as CheckboxStory,G as __namedExportsOrder,y as default};
