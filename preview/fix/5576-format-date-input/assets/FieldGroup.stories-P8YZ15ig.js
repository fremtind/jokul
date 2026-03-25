import{j as p,r as a}from"./iframe-oHeCnMhI.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dtmt7UKG.js";import{H as s,m as n}from"./Help.stories-BVCyGvpL.js";import c from"./RadioButton.stories-DkpypqGT.js";import{F as d}from"./FieldGroup-Dg0WZXIU.js";import{R as l}from"./RadioButton-BiH-aBpo.js";import{C as u}from"./Checkbox-D1H5qhMP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DQ0wHL7p.js";import"./Label-B8p4JncV.js";import"./SupportLabel-C_hkIReC.js";import"./WarningIcon-BLXcglJG.js";import"./Icon-DReADZtH.js";import"./Button-BiWoArXP.js";import"./usePreviousValue-xfPTeZbu.js";import"./Loader-Dfc271Dz.js";import"./useDelayedRender-BDpNUQUB.js";/* empty css               *//* empty css               */import"./Flex-tKG2vI7E.js";import"./SlotComponent-C56uL3fi.js";import"./mergeRefs-CXbfvQkj.js";import"./BaseRadioButton.stories-Cu302eFQ.js";import"./BaseRadioButton-CshFLR7k.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
