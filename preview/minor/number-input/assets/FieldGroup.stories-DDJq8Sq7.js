import{j as p,r as a}from"./iframe-BNT6YoXq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-PY-jf9y7.js";import{H as s,m as n}from"./Help.stories-Bh3OUBFD.js";import c from"./RadioButton.stories-CSh-Sp4M.js";import{F as d}from"./FieldGroup-CNGS8mBz.js";import{R as l}from"./RadioButton-NWtJ_pXM.js";import{C as u}from"./Checkbox-BxF7DXvE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DxsBaCjA.js";import"./Label-BAY9tnaf.js";import"./SupportLabel-DwzDdzIs.js";import"./WarningIcon-BPW-Sn5o.js";import"./Icon-CF1lqrfi.js";import"./Button-CKSHw-9E.js";import"./usePreviousValue-E69mOX1a.js";import"./Loader-Dev65YUd.js";import"./useDelayedRender-CaKayA5p.js";/* empty css               *//* empty css               */import"./Flex-B2SQu8Km.js";import"./SlotComponent-CnEV7K6D.js";import"./mergeRefs-BZpPILmd.js";import"./BaseRadioButton.stories-DH_ILFm-.js";import"./BaseRadioButton-BE-OjtLz.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
