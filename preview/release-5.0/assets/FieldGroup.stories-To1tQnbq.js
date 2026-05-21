import{r as a,j as p}from"./iframe-ZMT2ZqDa.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-0GmCWSWM.js";import{H as s,m as n}from"./Help.stories-D51_lOJG.js";import c from"./RadioButton.stories-4gLdSVWH.js";import{F as d}from"./FieldGroup-BEKkhFcL.js";import{C as l}from"./Checkbox-CM6bOECl.js";import{R as u}from"./RadioButton-B8Q47MDM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BrrpOLfF.js";import"./Button-CK7MZtaS.js";import"./usePreviousValue-DiizJqgi.js";import"./Loader-DphGPeh3.js";import"./useDelayedRender-BOwgpA8T.js";/* empty css               *//* empty css               */import"./Flex-DK_fLZw7.js";import"./SlotComponent-B_kVwKOj.js";import"./mergeRefs-JnugIZu6.js";import"./BaseRadioButton.stories-D6eEfgFi.js";import"./BaseRadioButton-ywbrFA0i.js";import"./useId-DMZudNGZ.js";/* empty css               */import"./Label-B9hfSalC.js";import"./SupportLabel-BAMVoAxA.js";import"./WarningIcon-kJs7fLom.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
