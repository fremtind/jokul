import{j as p,r as a}from"./iframe-DDnAP_yR.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DJgSokjH.js";import{H as s,m as n}from"./Help.stories-EJT1y_ua.js";import c from"./RadioButton.stories-DzE39cPx.js";import{F as d}from"./FieldGroup-CpAwCo8h.js";import{R as l}from"./RadioButton-Dy1lTcUN.js";import{C as u}from"./Checkbox-Bwk2h6Il.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BYR8mXs2.js";import"./Label-DJe0ouPB.js";import"./SupportLabel-Cy3VhGDz.js";import"./WarningIcon-DKzT9NOJ.js";import"./Icon-CPygF5iR.js";import"./Button-D2Clwh1a.js";import"./usePreviousValue-DinpHzaB.js";import"./Loader-VCK3brCc.js";import"./useDelayedRender-BJv_6fJM.js";/* empty css               *//* empty css               */import"./Flex-D5c10uSY.js";import"./SlotComponent-DLJF9HXw.js";import"./mergeRefs-C_lBGoZi.js";import"./BaseRadioButton.stories-CI-AfM1l.js";import"./BaseRadioButton-Ee_2Z7NU.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
