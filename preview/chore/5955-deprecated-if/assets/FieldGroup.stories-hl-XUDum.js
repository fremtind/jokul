import{j as p,r as a}from"./iframe-XCpfNrw3.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DCBg373I.js";import{H as s,m as n}from"./Help.stories-D_ARS6Ev.js";import c from"./RadioButton.stories-CXymJ9yJ.js";import{F as d}from"./FieldGroup-Cs-D9GLG.js";import{R as l}from"./RadioButton-BcWGHKX6.js";import{C as u}from"./Checkbox-DQDi2i2W.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BICgBt-4.js";import"./Label-CiqnKyaR.js";import"./SupportLabel-bSNnBQ5c.js";import"./WarningIcon-DRKQ_Vc5.js";import"./Icon-CH7DVMwT.js";import"./Button-C3P1ONXC.js";import"./usePreviousValue-D1IGgPus.js";import"./Loader-Elf2Vskc.js";import"./useDelayedRender-Dptvnmla.js";/* empty css               *//* empty css               */import"./Flex-Bevwaylb.js";import"./SlotComponent-DbIqt6jY.js";import"./mergeRefs-C0eHv5kZ.js";import"./BaseRadioButton.stories-EnMokFN7.js";import"./BaseRadioButton-BSDqt5ze.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const z=["RadioGroup","FieldGroupCheckboxGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,t as GroupWithTooltip,e as RadioGroup,z as __namedExportsOrder,w as default};
