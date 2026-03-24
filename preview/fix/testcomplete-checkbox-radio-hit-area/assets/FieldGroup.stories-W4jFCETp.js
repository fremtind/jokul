import{j as p,r as a}from"./iframe-GMtYk1zJ.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CGHUqZMr.js";import{H as s,m as n}from"./Help.stories-2IgIkRqS.js";import c from"./RadioButton.stories-C3-YkWhE.js";import{F as d}from"./FieldGroup-BgyZyMgp.js";import{R as l}from"./RadioButton-BWpZsBDv.js";import{C as u}from"./Checkbox-B5LNQm9c.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D0kS2hWN.js";import"./Label-CgZWWFOL.js";import"./SupportLabel-BSzhDHVw.js";import"./WarningIcon-yrjjafkc.js";import"./Icon-D156Gw6C.js";import"./Button-vGNY9hio.js";import"./usePreviousValue-4VIXW2Sc.js";import"./Loader-BWpu14B5.js";import"./useDelayedRender-C4Lpzx1l.js";/* empty css               *//* empty css               */import"./Flex-BEUiUP5p.js";import"./SlotComponent-Bog7JJGD.js";import"./mergeRefs-Bq-c3SxK.js";import"./BaseRadioButton.stories-CfkloB4n.js";import"./BaseRadioButton-DqY_PTaC.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,o as RadioGroup,w as __namedExportsOrder,q as default};
