import{j as p,r as a}from"./iframe-CvPQToOv.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DCiC57HK.js";import{H as s,m as n}from"./Help.stories-YkEaMsRz.js";import c from"./RadioButton.stories-Dqh_Yqfx.js";import{F as d}from"./FieldGroup-DZqFjFQs.js";import{R as l}from"./RadioButton-C289UT2g.js";import{C as u}from"./Checkbox-BNVG8Zyr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DkONDb52.js";import"./Label-Cfo4azGj.js";import"./SupportLabel-CJMqNYMP.js";import"./WarningIcon-XqgzyD6z.js";import"./Icon-BYG8I8Ck.js";import"./Button-CDlcM01r.js";import"./usePreviousValue-XVxm-c4M.js";import"./Loader-Cr2s7MUx.js";import"./useDelayedRender-BPVkkTHd.js";/* empty css               *//* empty css               */import"./Flex-fsPZDzlX.js";import"./SlotComponent-D-0c1H9X.js";import"./mergeRefs-BMOR2SFo.js";import"./BaseRadioButton.stories-C_QAv6Xv.js";import"./BaseRadioButton-DxAkFf9k.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
