import{j as p,r as a}from"./iframe-DofTGKEf.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-BErldC0h.js";import{H as s,m as n}from"./Help.stories-CFTDW4Xy.js";import c from"./RadioButton.stories-BoGQam01.js";import{F as d}from"./FieldGroup-Dz1CLJNs.js";import{R as l}from"./RadioButton-B6kyNMyT.js";import{C as u}from"./Checkbox-DLVVez-s.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CIuDy0V1.js";import"./Label-C0X2AwrP.js";import"./SupportLabel-008x4LpR.js";import"./WarningIcon-Bt9tmKAU.js";import"./Icon-CuyO6qAb.js";import"./Button-CuASwdIR.js";import"./usePreviousValue-DEAaiRaw.js";import"./Loader-yzpuUidA.js";import"./useDelayedRender-DhQZiJw5.js";/* empty css               *//* empty css               */import"./Flex-DJYRN_c_.js";import"./SlotComponent-BwibTijl.js";import"./mergeRefs-CUhJrLGK.js";import"./BaseRadioButton.stories-BUpAGsxH.js";import"./BaseRadioButton-TGiJpy3S.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
