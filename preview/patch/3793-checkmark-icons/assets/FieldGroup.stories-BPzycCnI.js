import{j as p,r as a}from"./iframe-P0I0wTTX.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BrXqRs3b.js";import{H as s,m as n}from"./Help.stories-Dz8PolvD.js";import c from"./RadioButton.stories-bZwd62q3.js";import{F as d}from"./FieldGroup-KzWcNstX.js";import{R as l}from"./RadioButton-Dw4vRBz3.js";import{C as u}from"./Checkbox-D28ljwnd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-t-rNn2Ng.js";import"./Label-CGaGrC61.js";import"./SupportLabel-CMZYL_hs.js";import"./WarningIcon-DPh5sQ2M.js";import"./Icon-CdTvbbgD.js";import"./Button-CDPvgwqU.js";import"./usePreviousValue-C9yAz74G.js";import"./Loader-Du2enzHK.js";import"./useDelayedRender-DaR5O0fO.js";/* empty css               *//* empty css               */import"./Flex-D9WmE3f3.js";import"./SlotComponent-Dz7WoK56.js";import"./mergeRefs-0X-9G2TK.js";import"./BaseRadioButton.stories-MsynFkp3.js";import"./BaseRadioButton-ZyuwsRWB.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
