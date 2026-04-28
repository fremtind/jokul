import{j as p,r as a}from"./iframe-CYo2bzf2.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-aSXPNVr6.js";import{H as s,m as n}from"./Help.stories-gZpiN50v.js";import c from"./RadioButton.stories-C3iIxL4M.js";import{F as d}from"./FieldGroup-CdrFe38I.js";import{R as l}from"./RadioButton-ByVQeAZO.js";import{C as u}from"./Checkbox-BiBF7JOq.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-lzBfx5oD.js";import"./Label-C9QhsEar.js";import"./SupportLabel-BpH0qqus.js";import"./WarningIcon-Ch5ifE-q.js";import"./Icon-BcLOdyqu.js";import"./Button-jHoyj3ng.js";import"./usePreviousValue-39hZAUWU.js";import"./Loader-C8N5RutA.js";import"./useDelayedRender-0tclUleK.js";/* empty css               *//* empty css               */import"./Flex-BzbINDlJ.js";import"./SlotComponent-e8SEurVO.js";import"./mergeRefs-B-wAz8qi.js";import"./BaseRadioButton.stories-C6EQoyYE.js";import"./BaseRadioButton-Cn1dqCvh.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
