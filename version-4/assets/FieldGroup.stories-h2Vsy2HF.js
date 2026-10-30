import{r as a,j as p}from"./iframe-B5tIbcqw.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-eiNdRqQK.js";import{H as s,m as n}from"./Help.stories-CvMw4Hua.js";import c from"./RadioButton.stories-1_NEWFK8.js";import{F as d}from"./FieldGroup-Bx7g2xlx.js";import{C as l}from"./Checkbox-D6eKspiP.js";import{R as u}from"./RadioButton-D4b0wlIM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BUcOGeLE.js";import"./Button-DpBjKXD-.js";import"./usePreviousValue-vJ3mxRwI.js";import"./Loader-ChaIMgB8.js";import"./useDelayedRender-DGzZBVS_.js";/* empty css               *//* empty css               */import"./Flex-DRYgLkP8.js";import"./SlotComponent-CyePm1sB.js";import"./mergeRefs-_7lZvp9j.js";import"./BaseRadioButton.stories-BfFZ3DO5.js";import"./BaseRadioButton-CFKlG40H.js";import"./useId-aRotGteX.js";/* empty css               */import"./Label-BrzHRCzI.js";import"./SupportLabel-tGUzy_oR.js";import"./WarningIcon-B77bR_WP.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
