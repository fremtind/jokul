import{j as p,r as a}from"./iframe-BJKLVHBW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DpDCHCFc.js";import{H as s,m as n}from"./Help.stories-dlC9nUH7.js";import c from"./RadioButton.stories-DHOa5Id5.js";import{F as d}from"./FieldGroup-D3h7tVI3.js";import{R as l}from"./RadioButton-CLEy4qdG.js";import{C as u}from"./Checkbox-hkdRijdR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--68G5vc6.js";import"./Label-B9mWKhIL.js";import"./SupportLabel-CuqxmaQc.js";import"./WarningIcon-Q977JN0d.js";import"./Icon-Dx10nCnm.js";import"./Button-fVSZAQTz.js";import"./usePreviousValue-Cy4b-XPK.js";import"./Loader-DT9tgc86.js";import"./useDelayedRender-BODrqyTr.js";/* empty css               *//* empty css               */import"./Flex-4eM3vTsZ.js";import"./SlotComponent-BBo_3h2G.js";import"./mergeRefs-PO4j1EW7.js";import"./BaseRadioButton.stories-CxNG1oqM.js";import"./BaseRadioButton-BqXUnG2W.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
