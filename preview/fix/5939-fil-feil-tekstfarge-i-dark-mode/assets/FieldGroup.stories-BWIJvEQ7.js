import{j as p,r as a}from"./iframe-XmsoY-G2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BIfHM-kE.js";import{H as s,m as n}from"./Help.stories-zyJtvfbW.js";import c from"./RadioButton.stories-DqkwXgOa.js";import{F as d}from"./FieldGroup-BSU0UMw2.js";import{R as l}from"./RadioButton-CV50uaQP.js";import{C as u}from"./Checkbox-CZF3lduh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Co078V9U.js";import"./Label-BeMiKkpV.js";import"./SupportLabel-OfVfwD-v.js";import"./WarningIcon-DWQiHp3u.js";import"./Icon-Dya0iPo2.js";import"./Button-BOng0lqp.js";import"./usePreviousValue-DcMZXprP.js";import"./Loader-BWyyeTxZ.js";import"./useDelayedRender-D3DwiVc3.js";/* empty css               *//* empty css               */import"./Flex-C2dG7YwV.js";import"./SlotComponent-T1ujL_1M.js";import"./mergeRefs-p8bLm8kG.js";import"./BaseRadioButton.stories-BD-Td0yv.js";import"./BaseRadioButton-C910zX3x.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
