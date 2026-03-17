import{j as p,r as a}from"./iframe-8C4cqpbl.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CquFaio2.js";import{H as s,m as n}from"./Help.stories-xptlKNrS.js";import c from"./RadioButton.stories-DtOIfmra.js";import{F as d}from"./FieldGroup-BYmBgkHZ.js";import{R as l}from"./RadioButton-rtDLAEmd.js";import{C as u}from"./Checkbox-D45cgTCI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bon6pId2.js";import"./Label-sIEAkSUV.js";import"./SupportLabel-d1WtSLj7.js";import"./WarningIcon-BC-NIqAa.js";import"./Icon-CBKl2Plo.js";import"./Button-Bv7D9vaS.js";import"./usePreviousValue-BLn-_tbk.js";import"./Loader-jJfKKZjW.js";import"./useDelayedRender-XIBsqOAA.js";/* empty css               *//* empty css               */import"./Flex-BZVbhP7i.js";import"./SlotComponent-CNJ7pHap.js";import"./mergeRefs-D9Z-y3P_.js";import"./BaseRadioButton.stories-BcxEsGvq.js";import"./BaseRadioButton-DDO5irTX.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
