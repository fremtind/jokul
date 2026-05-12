import{j as p,r as a}from"./iframe-BiB0C2kl.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CS89DDgn.js";import{H as s,m as n}from"./Help.stories-DLpmrF5e.js";import c from"./RadioButton.stories-BmIln9CA.js";import{F as d}from"./FieldGroup-Cb8ocubg.js";import{R as l}from"./RadioButton-DIssGa-d.js";import{C as u}from"./Checkbox-B324pVar.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-YybdL5Un.js";import"./Label-B8FFqsuX.js";import"./SupportLabel-DFRExa6A.js";import"./WarningIcon-GMl9vRJY.js";import"./Icon-nEIjeFpR.js";import"./Button-CTnR1eFA.js";import"./usePreviousValue-DSmQ1Geb.js";import"./Loader-BFtsvVWb.js";import"./useDelayedRender-Be3icX9h.js";/* empty css               *//* empty css               */import"./Flex-BZzroIiR.js";import"./SlotComponent-uZB1GUCc.js";import"./mergeRefs-DrgoG18o.js";import"./BaseRadioButton.stories-CcaJ-42U.js";import"./BaseRadioButton-Dmj4naY7.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
