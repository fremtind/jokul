import{j as p,r as a}from"./iframe-BR92ucMM.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B7Cp3Xf5.js";import{H as s,m as n}from"./Help.stories-uw48BLBY.js";import c from"./RadioButton.stories-1ykBXbLI.js";import{F as d}from"./FieldGroup-C4sZ2ue_.js";import{R as l}from"./RadioButton-DnZRzGvO.js";import{C as u}from"./Checkbox-DJMBg_I2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-769ox1kJ.js";import"./Label-BHiOoXxx.js";import"./SupportLabel-D97EvPI-.js";import"./WarningIcon-CuPvAiwx.js";import"./Icon-BBoPCZHR.js";import"./Button-ku6C7Kox.js";import"./usePreviousValue-td6LnYlA.js";import"./Loader-M85Z7VC_.js";import"./useDelayedRender-BTTEIivu.js";/* empty css               *//* empty css               */import"./Flex-DPLnT0uT.js";import"./SlotComponent-DMrI62W1.js";import"./mergeRefs-CyRj2zTj.js";import"./BaseRadioButton.stories-t5fGFKJo.js";import"./BaseRadioButton-U2I-357H.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
