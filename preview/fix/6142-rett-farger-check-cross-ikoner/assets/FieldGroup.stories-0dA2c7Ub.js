import{r as a,j as p}from"./iframe-DGXGSSOU.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-V6dCHBBM.js";import{H as s,m as n}from"./Help.stories-CS-Zuexx.js";import c from"./RadioButton.stories-i7UUs_Eo.js";import{F as d}from"./FieldGroup-WW0Vzq62.js";import{C as l}from"./Checkbox-CBhbJ-br.js";import{R as u}from"./RadioButton-BhhgdAp9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Da5PGP6q.js";import"./Button-R8DfPPlT.js";import"./usePreviousValue-CeP2HG_2.js";import"./Loader-BXUd3hKK.js";import"./useDelayedRender-CgiNglFb.js";/* empty css               *//* empty css               */import"./Flex-OkCazpzB.js";import"./SlotComponent-DS2coekL.js";import"./mergeRefs-CyTD42DU.js";import"./BaseRadioButton.stories-pkAjxWkF.js";import"./BaseRadioButton-CJxnctAj.js";import"./useId-D9Fa3ary.js";/* empty css               */import"./Label-Bp0yp4MD.js";import"./SupportLabel-CTB16yIc.js";import"./WarningIcon-CChNyK7j.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
