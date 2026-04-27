import{j as p,r as a}from"./iframe-RZuzlvdg.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-DZRuahcg.js";import{H as s,m as n}from"./Help.stories-B8q7nXs9.js";import c from"./RadioButton.stories-DmvGo3BC.js";import{F as d}from"./FieldGroup-DCrdB0fb.js";import{R as l}from"./RadioButton-BL831JW1.js";import{C as u}from"./Checkbox-i1D1otKJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-pRp_S193.js";import"./Label-DSEHvFmM.js";import"./SupportLabel-CnEEsmQh.js";import"./WarningIcon-C3Qvwc8z.js";import"./Icon-NiaQj2UL.js";import"./Button-B6Y4pukr.js";import"./usePreviousValue-BFyDKVRa.js";import"./Loader-Bf-3XBdV.js";import"./useDelayedRender-UiC_xbWk.js";/* empty css               *//* empty css               */import"./Flex-BDW63FK2.js";import"./SlotComponent-Bnj0fOi3.js";import"./mergeRefs-S8OZ_EnP.js";import"./BaseRadioButton.stories-CWYFbzsX.js";import"./BaseRadioButton-BCWZjFb6.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
