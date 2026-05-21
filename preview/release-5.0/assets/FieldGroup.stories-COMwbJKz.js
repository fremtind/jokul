import{r as a,j as p}from"./iframe-TC-md8Am.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CTs6Pt7Q.js";import{H as s,m as n}from"./Help.stories-2nwUePqK.js";import c from"./RadioButton.stories-BbxapXjt.js";import{F as d}from"./FieldGroup-BvOk0wsg.js";import{C as l}from"./Checkbox-DoxltHdb.js";import{R as u}from"./RadioButton-CzF5GOcO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-DCNW4_23.js";import"./Button-8QZNGfXe.js";import"./usePreviousValue-Dl6lzkzW.js";import"./Loader-C1emmmKY.js";import"./useDelayedRender-CcH21As-.js";/* empty css               *//* empty css               */import"./Flex-BSAlPfGI.js";import"./SlotComponent-BbwSqznR.js";import"./mergeRefs-NzvDWy9x.js";import"./BaseRadioButton.stories-C0HFF8zN.js";import"./BaseRadioButton-DoR5Xsrx.js";import"./useId-DvuqbSQw.js";/* empty css               */import"./Label-S9KO1a0c.js";import"./SupportLabel-cff4pTG0.js";import"./WarningIcon-Bqem2cag.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
