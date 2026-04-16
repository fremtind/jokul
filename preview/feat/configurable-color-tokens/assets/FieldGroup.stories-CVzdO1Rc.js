import{j as p,r as a}from"./iframe-rsVuXI-8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-D4ag2lQj.js";import{H as s,m as n}from"./Help.stories-CRPIRvPw.js";import c from"./RadioButton.stories-AkFl84n6.js";import{F as d}from"./FieldGroup-Be_BvV2Q.js";import{R as l}from"./RadioButton-CvSA0zV7.js";import{C as u}from"./Checkbox-Cz0OQk0r.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BG-k4EjK.js";import"./Label-edlnvLJd.js";import"./SupportLabel-0cIkGiV5.js";import"./WarningIcon-BACubGF8.js";import"./Icon-BjW3jJoQ.js";import"./Button-CEyexN2W.js";import"./usePreviousValue-CzXdN5e0.js";import"./Loader-DR2h6ENs.js";import"./useDelayedRender-BraeHFRQ.js";/* empty css               *//* empty css               */import"./Flex-C5qyS4_c.js";import"./SlotComponent-CFnnqqLh.js";import"./mergeRefs-BhdOzAOc.js";import"./BaseRadioButton.stories-iCrUBU4M.js";import"./BaseRadioButton-BuxJCdA8.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
