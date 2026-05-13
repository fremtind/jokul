import{j as p,r as a}from"./iframe-Dv0oUWxh.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CpJPfua_.js";import{H as s,m as n}from"./Help.stories-BYLVtk0_.js";import c from"./RadioButton.stories-DyOdEggD.js";import{F as d}from"./FieldGroup-Cm8UBC63.js";import{R as l}from"./RadioButton-Cv7FowSm.js";import{C as u}from"./Checkbox-BEWJ00q-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BSqsCyL9.js";import"./Label-BTInXbzL.js";import"./SupportLabel-Bydhx4wU.js";import"./WarningIcon-BjxJH4Xd.js";import"./Icon-BB1B6o0Q.js";import"./Button-DanLtf_x.js";import"./usePreviousValue-C6g7xdAp.js";import"./Loader-Dym3jX0H.js";import"./useDelayedRender-KN5Vo0jd.js";/* empty css               *//* empty css               */import"./Flex-LzO5EajD.js";import"./SlotComponent-CK16wJVr.js";import"./mergeRefs-BG-0mM4M.js";import"./BaseRadioButton.stories-Dk8ur7UN.js";import"./BaseRadioButton-BFETPpX9.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
