import{r as a,j as p}from"./iframe-D9KBidzW.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BGRd1tiM.js";import{H as s,m as n}from"./Help.stories-BuVeLx7T.js";import c from"./RadioButton.stories-BKhJKHwW.js";import{F as d}from"./FieldGroup-C73V6EeQ.js";import{C as l}from"./Checkbox-D_80SR2A.js";import{R as u}from"./RadioButton-DAN6F9p5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B2KT17zN.js";import"./Button-B1JknHuX.js";import"./usePreviousValue-fmgdwsXe.js";import"./Loader-D_Wyov7R.js";import"./useDelayedRender-CbvQmlsq.js";/* empty css               *//* empty css               */import"./Flex-trXsHRs3.js";import"./SlotComponent-C057UOaw.js";import"./mergeRefs-BZyr4lhX.js";import"./BaseRadioButton.stories-Bj2mAhNk.js";import"./BaseRadioButton-Bvwg8hH0.js";import"./useId-CIvFW6YC.js";/* empty css               */import"./Label-CK4wdh6P.js";import"./SupportLabel-D7j85KKG.js";import"./WarningIcon-B-D0ewEi.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
