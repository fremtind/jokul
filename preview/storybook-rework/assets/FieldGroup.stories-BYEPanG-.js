import{r as a,j as p}from"./iframe-Y20DORU8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DMszS04y.js";import s from"./Help.stories-BIvazh5H.js";import n from"./RadioButton.stories-BFXkIxUq.js";import{F as c}from"./FieldGroup-CEXpdW7R.js";import{C as d}from"./Checkbox-BKSagWSd.js";import{H as l}from"./Help-CK2PNDIE.js";import{R as u}from"./RadioButton-m9ey55wk.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-BSUfcAxO.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B-LcwTc6.js";import"./mergeRefs-DL5G7m5F.js";import"./BaseRadioButton.stories-UigN_8Ph.js";import"./BaseRadioButton-DixMvtaY.js";import"./useId-CSJRbQxb.js";/* empty css               */import"./Label-S3PiGneq.js";import"./SupportLabel-B0QG9p8Z.js";import"./WarningIcon-BVxVD1OR.js";import"./Icon-Dht2BOmM.js";import"./Button-we74AvPk.js";import"./usePreviousValue-BgC49yhc.js";import"./Loader-CbCCSoFg.js";import"./useDelayedRender-DGJPn3Ai.js";const z={title:"Komponenter/Field Group",component:c,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...n.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(d,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(l,{...s.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,A as __namedExportsOrder,z as default};
