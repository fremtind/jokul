import{j as p,r as a}from"./iframe-4qUkCLET.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bg9fRVl_.js";import{H as s,m as n}from"./Help.stories-VcBbDCkq.js";import c from"./RadioButton.stories-DNnS4v7V.js";import{F as d}from"./FieldGroup-ew0oTFtv.js";import{R as l}from"./RadioButton-BTnzppz2.js";import{C as u}from"./Checkbox-DXXG2KoD.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CBjKlYnp.js";import"./Label-B1eyw7re.js";import"./SupportLabel-C4YcDHnw.js";import"./WarningIcon-D6EhRwgr.js";import"./Icon-D-1gNPsF.js";import"./Button-DPOhBNHS.js";import"./usePreviousValue-DE87bowY.js";import"./Loader-BMT8EEwp.js";import"./useDelayedRender-C95zi9Cp.js";/* empty css               *//* empty css               */import"./Flex-B4UO2wvz.js";import"./SlotComponent-BcLEVbYu.js";import"./mergeRefs-4xYaoolw.js";import"./BaseRadioButton.stories-CukvGo6t.js";import"./BaseRadioButton-BKXqt4iB.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
