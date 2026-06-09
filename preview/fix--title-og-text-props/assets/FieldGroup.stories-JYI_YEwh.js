import{r as a,j as p}from"./iframe-CWV9B2cz.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DjOEOXpL.js";import{H as s,m as n}from"./Help.stories-D2qzWpNg.js";import c from"./RadioButton.stories-CoyNacfg.js";import{F as d}from"./FieldGroup-DBX9GnLh.js";import{C as l}from"./Checkbox-B_jOedG_.js";import{R as u}from"./RadioButton-BIpGBmJy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B7-OerSI.js";import"./Button-Ciw_nD11.js";import"./usePreviousValue-CunyO-iW.js";import"./Loader-D6ds5TBl.js";import"./useDelayedRender-5F3ncEGi.js";/* empty css               *//* empty css               */import"./Flex-BD0MSm9A.js";import"./SlotComponent-CtvqoMY8.js";import"./mergeRefs-DVkQgyut.js";import"./BaseRadioButton.stories-Br35xxoN.js";import"./BaseRadioButton-DgRW4LjA.js";import"./useId-O5abkR8A.js";/* empty css               */import"./Label-JLrfGQkV.js";import"./SupportLabel-B5ynOfVP.js";import"./WarningIcon-VtCG1v7i.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
