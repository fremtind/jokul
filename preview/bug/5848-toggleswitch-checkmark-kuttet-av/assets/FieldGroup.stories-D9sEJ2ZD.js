import{j as p,r as a}from"./iframe-CUtAO4_H.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DQCqPKQH.js";import{H as s,m as n}from"./Help.stories-CPF5yppc.js";import c from"./RadioButton.stories-C1B17Eny.js";import{F as d}from"./FieldGroup-Tr1wbGbV.js";import{R as l}from"./RadioButton-BOYOW3Nl.js";import{C as u}from"./Checkbox-Cjdgoaf9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DawFxXjU.js";import"./Label-C-ptb3de.js";import"./SupportLabel-Cu_zjtOA.js";import"./WarningIcon-Bc_srnyi.js";import"./Icon-LXxklaky.js";import"./Button-CQhlugmI.js";import"./usePreviousValue-RU32ikjk.js";import"./Loader-2-h525OK.js";import"./useDelayedRender-3p_YHzjB.js";/* empty css               *//* empty css               */import"./Flex-BxrIRXZ3.js";import"./SlotComponent-C2Ixz23q.js";import"./mergeRefs-CZNzL4Jd.js";import"./BaseRadioButton.stories-C0wg2HKi.js";import"./BaseRadioButton-COMNC55J.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
