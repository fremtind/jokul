import{r as a,j as p}from"./iframe-BoFEDEja.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CdsSF2Yf.js";import{H as s,m as n}from"./Help.stories-DRfBbsGR.js";import c from"./RadioButton.stories-BrIn4GEb.js";import{F as d}from"./FieldGroup-XfbsuIrp.js";import{C as l}from"./Checkbox-CLy_0fgm.js";import{R as u}from"./RadioButton-DIZuhhu4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-hjjZKQD3.js";import"./Button-DJkhKs7L.js";import"./usePreviousValue-C4K5Agzg.js";import"./Loader-BGByjsiR.js";import"./useDelayedRender-CF45dtYy.js";/* empty css               *//* empty css               */import"./Flex-BB8lb2z_.js";import"./SlotComponent-BAQK90cg.js";import"./mergeRefs-zrFraTSY.js";import"./BaseRadioButton.stories-ClakrvSR.js";import"./BaseRadioButton-dlGU62GI.js";import"./useId-DTpAXHSc.js";/* empty css               */import"./Label-CVI38j-c.js";import"./SupportLabel-BkwpuxgC.js";import"./WarningIcon-D-5-umMG.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
