import{j as p,r as a}from"./iframe-DKDI1xRK.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-5XGInEK0.js";import{H as s,m as n}from"./Help.stories-BYr29jUE.js";import c from"./RadioButton.stories-Bd7a1ozy.js";import{F as d}from"./FieldGroup-m-2JRMOY.js";import{R as l}from"./RadioButton-DZ-7dAE4.js";import{C as u}from"./Checkbox-BRjuA0fH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-B90MlCyg.js";import"./Label-CTOwfmbR.js";import"./SupportLabel-CFeHWw_g.js";import"./WarningIcon-Da7eZi5F.js";import"./Icon-CL6UQJea.js";import"./Button-CKk17l8t.js";import"./usePreviousValue-C_ax9Fzb.js";import"./Loader-DC15KuYO.js";import"./useDelayedRender-D2p_4oUK.js";/* empty css               *//* empty css               */import"./Flex-BM2csynr.js";import"./SlotComponent-BVnXFDoq.js";import"./mergeRefs-B7tdoPHz.js";import"./BaseRadioButton.stories-DA-bFoEX.js";import"./BaseRadioButton-C5X40YgY.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
