import{j as p,r as a}from"./iframe-L0uHUf-c.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CtGtmFev.js";import{H as s,m as n}from"./Help.stories-CYBEJEvH.js";import c from"./RadioButton.stories-7mLSwA3e.js";import{F as d}from"./FieldGroup-lrO9n-WF.js";import{R as l}from"./RadioButton-seS1jW8v.js";import{C as u}from"./Checkbox-DjX5QHEr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DRRp-ZxA.js";import"./Label-CSldLa2A.js";import"./SupportLabel-Ck_2Vn6d.js";import"./WarningIcon-DgmALyCE.js";import"./Icon-DaDDgQqr.js";import"./Button-BObDu7cg.js";import"./usePreviousValue-UUlGyrlG.js";import"./Loader-Dn283jHi.js";import"./useDelayedRender-DbUk6ybW.js";/* empty css               *//* empty css               */import"./Flex-DCGJdugO.js";import"./SlotComponent-td1Ht4mf.js";import"./mergeRefs-BD1kQx_m.js";import"./BaseRadioButton.stories-Cz5xBHGD.js";import"./BaseRadioButton-BGfKUqE5.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
