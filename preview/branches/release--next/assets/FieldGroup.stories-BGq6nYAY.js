import{j as p,r as a}from"./iframe-7vTjria7.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-b6O20EL_.js";import{H as s,m as n}from"./Help.stories-TWGbqcrQ.js";import c from"./RadioButton.stories-nA6hTVQO.js";import{F as d}from"./FieldGroup-CEJDBzxY.js";import{R as l}from"./RadioButton-r2EJoT7Y.js";import{C as u}from"./Checkbox-ChtTZyCP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BEypXigi.js";import"./Label-CmmSTWyw.js";import"./SupportLabel-CDP1aZVp.js";import"./WarningIcon-DP08RBj5.js";import"./Icon-BvoW3Zuj.js";import"./Button-yw5n0xfo.js";import"./usePreviousValue-D8YHpXls.js";import"./Loader-Dfab9C0w.js";import"./useDelayedRender-BlbNzjOs.js";/* empty css               *//* empty css               */import"./Flex-Du5qWibg.js";import"./SlotComponent-BF-bfsFC.js";import"./mergeRefs-BGDZvoqO.js";import"./BaseRadioButton.stories-B4QiXthw.js";import"./BaseRadioButton-CYG959Ey.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
