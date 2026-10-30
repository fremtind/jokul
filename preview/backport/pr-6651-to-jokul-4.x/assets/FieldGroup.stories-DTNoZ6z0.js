import{r as a,j as p}from"./iframe-D0qo732a.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D2UFw7Yh.js";import{H as s,m as n}from"./Help.stories-BotGPaqm.js";import c from"./RadioButton.stories-C62bcUng.js";import{F as d}from"./FieldGroup-CMmc4jx0.js";import{C as l}from"./Checkbox-pj8k2NMg.js";import{R as u}from"./RadioButton-D74OFqlW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-B96o5MoN.js";import"./Button-BNRyylnP.js";import"./usePreviousValue-CSeqiAn4.js";import"./Loader-ZDF2e-l8.js";import"./useDelayedRender-BAzyQOia.js";/* empty css               *//* empty css               */import"./Flex-C1afjefM.js";import"./SlotComponent-BLreehP0.js";import"./mergeRefs-DXSZ7bSr.js";import"./BaseRadioButton.stories-BuJ18j2q.js";import"./BaseRadioButton-C5Vecw_O.js";import"./useId-CJR8rTDO.js";/* empty css               */import"./Label-C6VqyUMd.js";import"./SupportLabel-DAl3dWce.js";import"./WarningIcon-fW3g9jwY.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
