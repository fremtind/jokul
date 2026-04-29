import{j as p,r as a}from"./iframe-CaoljD_A.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BsFfbgvy.js";import{H as s,m as n}from"./Help.stories-DmV_HfJ2.js";import c from"./RadioButton.stories-D5lvOPzt.js";import{F as d}from"./FieldGroup-DbzZwD6z.js";import{R as l}from"./RadioButton-DO1E6iYn.js";import{C as u}from"./Checkbox-C3UMFsDE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D3rOMPEr.js";import"./Label-BGEBq8XA.js";import"./SupportLabel-BDA8XzUl.js";import"./WarningIcon-BoeWlQf-.js";import"./Icon-BaIN49ix.js";import"./Button-Z6Tusrx-.js";import"./usePreviousValue-DpD3AnWT.js";import"./Loader-84553PLK.js";import"./useDelayedRender-zCXJk6SM.js";/* empty css               *//* empty css               */import"./Flex-DJXl_eaS.js";import"./SlotComponent-DWpquPRk.js";import"./mergeRefs-DguI107v.js";import"./BaseRadioButton.stories-ztguJIIW.js";import"./BaseRadioButton-DCo4_lUp.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
