import{j as p,r as a}from"./iframe-Reoz9Oy7.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DB76h-Fq.js";import{H as s,m as n}from"./Help.stories-DUQXLezY.js";import c from"./RadioButton.stories-MUqNAE68.js";import{F as d}from"./FieldGroup-cvFzO0VH.js";import{R as l}from"./RadioButton-DD_qRS_Z.js";import{C as u}from"./Checkbox-BVFiv113.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BSw2NOv4.js";import"./Label-E_3U1cfx.js";import"./SupportLabel-r0jujuD1.js";import"./WarningIcon-DtnQuUgk.js";import"./Icon-649cOEuk.js";import"./Button-tmQBy4fm.js";import"./usePreviousValue-DVbXEErY.js";import"./Loader-BpROqRb1.js";import"./useDelayedRender-C1V2yUfg.js";/* empty css               *//* empty css               */import"./Flex-DNNaws50.js";import"./SlotComponent-SDOoT3MH.js";import"./mergeRefs-CQuIOwnD.js";import"./BaseRadioButton.stories-pEjJt4bD.js";import"./BaseRadioButton-0ukjwRVQ.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
