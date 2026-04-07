import{j as p,r as a}from"./iframe-oeXNC7qH.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BpP-6HII.js";import{H as s,m as n}from"./Help.stories-OpT6ZDvu.js";import c from"./RadioButton.stories-D-GqNKE-.js";import{F as d}from"./FieldGroup-EG1O03PO.js";import{R as l}from"./RadioButton-CPGlIcDt.js";import{C as u}from"./Checkbox-vlqcXLQI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Db2U9K5G.js";import"./Label-CAXitaVg.js";import"./SupportLabel-0elj7W_N.js";import"./WarningIcon-C61Tpt-y.js";import"./Icon-DMUxCzel.js";import"./Button-Qvi9ByZh.js";import"./usePreviousValue-D89rJnTy.js";import"./Loader-eHWXKEtk.js";import"./useDelayedRender-B--6KPss.js";/* empty css               *//* empty css               */import"./Flex-CGaCDdsW.js";import"./SlotComponent-DCGKo9FK.js";import"./mergeRefs-CXOUDK8c.js";import"./BaseRadioButton.stories-BkFu0tMR.js";import"./BaseRadioButton-Caps2SjP.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
