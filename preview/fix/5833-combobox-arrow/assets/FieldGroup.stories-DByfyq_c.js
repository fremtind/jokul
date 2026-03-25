import{j as p,r as a}from"./iframe-D3AKotyT.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CKfhoKlM.js";import{H as s,m as n}from"./Help.stories-B5FJe_Bg.js";import c from"./RadioButton.stories-C1-3Z8cw.js";import{F as d}from"./FieldGroup-DWlQcMcW.js";import{R as l}from"./RadioButton-CQkesE6r.js";import{C as u}from"./Checkbox-Dx9hfR08.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cle4ag8N.js";import"./Label-78gtr3Fm.js";import"./SupportLabel-BSxtPowV.js";import"./WarningIcon-D2yyYTcr.js";import"./Icon-CiBUj_u7.js";import"./Button-CoLzHd8I.js";import"./usePreviousValue-4M8lJkeF.js";import"./Loader-CkRTv71C.js";import"./useDelayedRender-CTTbJcps.js";/* empty css               *//* empty css               */import"./Flex-CN75Q0Kt.js";import"./SlotComponent-CBY5f3UI.js";import"./mergeRefs-RuEKJtoT.js";import"./BaseRadioButton.stories-CMhSM9NZ.js";import"./BaseRadioButton-rS_AfrmK.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
