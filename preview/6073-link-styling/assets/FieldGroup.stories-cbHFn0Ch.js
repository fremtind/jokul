import{r as a,j as p}from"./iframe-CmO7dn95.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-k66wpbTN.js";import{H as s,m as n}from"./Help.stories-DIu10jaN.js";import c from"./RadioButton.stories-CQGyccp4.js";import{F as d}from"./FieldGroup-CNYhL35m.js";import{C as l}from"./Checkbox-CMjftvJq.js";import{R as u}from"./RadioButton-CUg-a2q4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-C_nwbsWC.js";import"./Button-X31BywGJ.js";import"./usePreviousValue-zHXjK7gI.js";import"./Loader-CIAPqwav.js";import"./useDelayedRender-DjvzBlqQ.js";/* empty css               *//* empty css               */import"./Flex-XDYixTSC.js";import"./SlotComponent-D9HDapX9.js";import"./mergeRefs-DOAU444Y.js";import"./BaseRadioButton.stories-CK0Beixk.js";import"./BaseRadioButton-CtMSPIGd.js";import"./useId-ycxFZW9_.js";/* empty css               */import"./Label-C0By6y6X.js";import"./SupportLabel-DXjBum3l.js";import"./WarningIcon-CWsxDl13.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
