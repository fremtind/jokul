import{j as p,r as a}from"./iframe-BbClmaK-.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C6HDhL-b.js";import{H as s,m as n}from"./Help.stories-BPFJV8_N.js";import c from"./RadioButton.stories-DwRhpblD.js";import{F as d}from"./FieldGroup-C2k6OSAg.js";import{R as l}from"./RadioButton-P5Y7JgRR.js";import{C as u}from"./Checkbox-Cw5PoO0w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DjtsYX0x.js";import"./Label-WZlLg9B6.js";import"./SupportLabel-XPgypBW7.js";import"./WarningIcon-BkKvF2y0.js";import"./Icon-BiAdpX-I.js";import"./Button-BE3HLoIy.js";import"./usePreviousValue-B1T2HL_4.js";import"./Loader-gHz7a8bz.js";import"./useDelayedRender-B4vSHc7k.js";/* empty css               *//* empty css               */import"./Flex-FdtJAh-M.js";import"./SlotComponent-CYRNqy2q.js";import"./mergeRefs-CJY3VlFB.js";import"./BaseRadioButton.stories-CkmkGA7D.js";import"./BaseRadioButton-Rb0V4wMY.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
