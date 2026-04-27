import{j as p,r as a}from"./iframe-0oqx5Tz4.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BgJa5zP8.js";import{H as s,m as n}from"./Help.stories-kfTnicRG.js";import c from"./RadioButton.stories-BEo3u1Zj.js";import{F as d}from"./FieldGroup-ssdyGW2P.js";import{R as l}from"./RadioButton-H7jMtfJj.js";import{C as u}from"./Checkbox-DfwgKeyP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BJhsUBZ6.js";import"./Label-BYRgHVHF.js";import"./SupportLabel-CMf_8eLx.js";import"./WarningIcon-DSY39Dj2.js";import"./Icon-DfMbDXmf.js";import"./Button-CZ2jYC9C.js";import"./usePreviousValue-Dk9-6M9P.js";import"./Loader-CG900NZ5.js";import"./useDelayedRender-De9aqXnX.js";/* empty css               *//* empty css               */import"./Flex-DB3E6Vij.js";import"./SlotComponent-iPHMaEOK.js";import"./mergeRefs-0mzKaie1.js";import"./BaseRadioButton.stories-BpKUBQ2C.js";import"./BaseRadioButton-CLBPME86.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
