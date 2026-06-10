import{r as a,j as p}from"./iframe-DJTO7uPW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CecF85is.js";import{H as s,m as n}from"./Help.stories-CNu2iUQk.js";import c from"./RadioButton.stories-BCZdcL3U.js";import{F as d}from"./FieldGroup-CSDLwwSa.js";import{C as l}from"./Checkbox-Bdn0FI7h.js";import{R as u}from"./RadioButton-CIOjoVWf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-FtEP0_zt.js";import"./Button-BA1wehc-.js";import"./usePreviousValue-B6gVPERq.js";import"./Loader-vqKkYsTD.js";import"./useDelayedRender-BF8-rzsr.js";/* empty css               *//* empty css               */import"./Flex-BJa-tXN6.js";import"./SlotComponent-Clj8c_QB.js";import"./mergeRefs-D08c-1DF.js";import"./BaseRadioButton.stories-CSDDZmbX.js";import"./BaseRadioButton-CYJJlS-y.js";import"./useId-CCWt8BiS.js";/* empty css               */import"./Label-Dw1uB5zB.js";import"./SupportLabel-B-pWgetR.js";import"./WarningIcon-DDErAUp0.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
