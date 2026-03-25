import{j as p,r as a}from"./iframe-DP92GG-Y.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-w8Ul3tBv.js";import{H as s,m as n}from"./Help.stories-BWo_hlUa.js";import c from"./RadioButton.stories-Br6Yvg89.js";import{F as d}from"./FieldGroup-DdLYJJpM.js";import{R as l}from"./RadioButton-DhJeeiZl.js";import{C as u}from"./Checkbox-B1bq8KGo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DzLAgHnO.js";import"./Label-x5rItwxG.js";import"./SupportLabel-DSMcpq9W.js";import"./WarningIcon-BbG7GN-Q.js";import"./Icon-3FTGEmVE.js";import"./Button-BYyj6tJ3.js";import"./usePreviousValue-DymADNcJ.js";import"./Loader-CpB7Yu6B.js";import"./useDelayedRender-0M1q_4dF.js";/* empty css               *//* empty css               */import"./Flex-BLDg9gH7.js";import"./SlotComponent-hciTDkbP.js";import"./mergeRefs-WbUf0d8k.js";import"./BaseRadioButton.stories-DBAOdVX4.js";import"./BaseRadioButton-BfDAOSIR.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
