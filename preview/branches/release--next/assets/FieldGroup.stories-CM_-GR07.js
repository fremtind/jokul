import{j as p,r as a}from"./iframe-B93scUG8.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-C06mr4YP.js";import{H as s,m as n}from"./Help.stories-DMIOCBn6.js";import c from"./RadioButton.stories-DzBKnwZb.js";import{F as d}from"./FieldGroup-Dx-D76ZT.js";import{R as l}from"./RadioButton-pKxLmSY4.js";import{C as u}from"./Checkbox-NVEFxTsM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BRDNXIiN.js";import"./Label-DVL7n51w.js";import"./SupportLabel-CzauhOgV.js";import"./WarningIcon-DzUSw9yX.js";import"./Icon-B9uNnDz3.js";import"./Button-BF_GrdPK.js";import"./usePreviousValue-Ci7ndcF3.js";import"./Loader-DMFiYZE-.js";import"./useDelayedRender-Ds5zVzwl.js";/* empty css               *//* empty css               */import"./Flex-7Yom15uD.js";import"./SlotComponent-f3JFelAH.js";import"./mergeRefs-fPI_nR6E.js";import"./BaseRadioButton.stories-BtA2yt1Z.js";import"./BaseRadioButton-DCWJ0Al9.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
