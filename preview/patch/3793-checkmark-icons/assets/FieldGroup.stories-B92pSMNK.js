import{j as p,r as a}from"./iframe-D3bh5Q2R.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CtmxE9WB.js";import{H as s,m as n}from"./Help.stories-nuz1rtWN.js";import c from"./RadioButton.stories-DPwXsXvU.js";import{F as d}from"./FieldGroup-zw5p9BR6.js";import{R as l}from"./RadioButton-ySztjz5Q.js";import{C as u}from"./Checkbox-BzlUQUs3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-CRVHwlXb.js";import"./Label-BtLOR10y.js";import"./SupportLabel-HCOcpzEi.js";import"./WarningIcon-DekumlLp.js";import"./Icon-BVvztwyt.js";import"./Button-CNi7Jm-r.js";import"./usePreviousValue-Bm6ggmhd.js";import"./Loader-Cef_JgEH.js";import"./useDelayedRender-Bwfpkr7E.js";/* empty css               *//* empty css               */import"./Flex-kfDGSXyB.js";import"./SlotComponent-B4gPukhn.js";import"./mergeRefs-Cs5vaa1W.js";import"./BaseRadioButton.stories-DFY5PNAt.js";import"./BaseRadioButton-CY1D17LZ.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
