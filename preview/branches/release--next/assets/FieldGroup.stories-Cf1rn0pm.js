import{j as p,r as a}from"./iframe-CbqnWQCq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Bb4zeXc-.js";import{H as s,m as n}from"./Help.stories-6kdENB-B.js";import c from"./RadioButton.stories-CMrtCVSr.js";import{F as d}from"./FieldGroup-XzYCW4SK.js";import{R as l}from"./RadioButton-BfXyM8G3.js";import{C as u}from"./Checkbox-DQtmQPEA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-D0IiUiXu.js";import"./Label-p04dFkAs.js";import"./SupportLabel-BxV2K5xT.js";import"./WarningIcon-VQosgwIR.js";import"./Icon-AOYEwNZO.js";import"./Button-mWBohk40.js";import"./usePreviousValue-Cy3ydINE.js";import"./Loader-DlOHBa6A.js";import"./useDelayedRender--DMn3L1v.js";/* empty css               *//* empty css               */import"./Flex-jKr-_D2d.js";import"./SlotComponent-Dk9WtakJ.js";import"./mergeRefs-D4mhycXU.js";import"./BaseRadioButton.stories-BTiYOmJu.js";import"./BaseRadioButton-DGYuRjcp.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
