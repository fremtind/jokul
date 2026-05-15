import{r as a,j as p}from"./iframe-B5IeWttx.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dth8P1Y4.js";import{H as s,m as n}from"./Help.stories-DwJp6i2Z.js";import c from"./RadioButton.stories-DgOM4Roq.js";import{F as d}from"./FieldGroup-1ywBdN51.js";import{C as l}from"./Checkbox-DpCeyuAX.js";import{R as u}from"./RadioButton-BoruVCE3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BZuruzsS.js";import"./Button-BCmcgtX-.js";import"./usePreviousValue-B_zquN6r.js";import"./Loader-D2TcHlrh.js";import"./useDelayedRender-CADyGbKt.js";/* empty css               *//* empty css               */import"./Flex-D1JyIoPV.js";import"./SlotComponent-CBZ192bt.js";import"./mergeRefs-BGIMDes4.js";import"./BaseRadioButton.stories-C-3hMbp5.js";import"./BaseRadioButton-2ttp6woH.js";import"./useId-BUCEP_l2.js";/* empty css               */import"./Label-Dly8LW4u.js";import"./SupportLabel-hEI8yVyF.js";import"./WarningIcon-DhX5U6JL.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
