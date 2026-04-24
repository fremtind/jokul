import{j as p,r as a}from"./iframe-CO8GEMMq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BF8B3FEp.js";import{H as s,m as n}from"./Help.stories-BN5G5xST.js";import c from"./RadioButton.stories-DpCLHJU2.js";import{F as d}from"./FieldGroup-CKoU3AoG.js";import{R as l}from"./RadioButton-CouTJIMD.js";import{C as u}from"./Checkbox-DtvK9IAn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B03I_Ixj.js";import"./Label-BmxcqqV_.js";import"./SupportLabel-DvSm5NLB.js";import"./WarningIcon-BZTWEgmU.js";import"./Icon-OacAcm1H.js";import"./Button-BwQVjJzq.js";import"./usePreviousValue-rafly5u2.js";import"./Loader-D7UJX8eV.js";import"./useDelayedRender-DnXd1VLy.js";/* empty css               *//* empty css               */import"./Flex-CpX1dYfL.js";import"./SlotComponent-BHpZVklu.js";import"./mergeRefs-CygAQkyw.js";import"./BaseRadioButton.stories-oysff0w1.js";import"./BaseRadioButton-Bp8hccgz.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
