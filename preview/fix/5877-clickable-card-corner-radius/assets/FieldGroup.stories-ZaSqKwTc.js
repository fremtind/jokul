import{j as p,r as a}from"./iframe-kL59Q-_B.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B2dv4puA.js";import{H as s,m as n}from"./Help.stories-CAhVZKTx.js";import c from"./RadioButton.stories-BjDXKVAF.js";import{F as d}from"./FieldGroup-C8QW95Na.js";import{R as l}from"./RadioButton-DpmoU74g.js";import{C as u}from"./Checkbox-BcbK1qBp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-DRk9WOjN.js";import"./Label-CwT3PnTj.js";import"./SupportLabel-ivKt00MD.js";import"./WarningIcon-3WPfXgvd.js";import"./Icon-B76BqFt1.js";import"./Button-DQQOhcPD.js";import"./usePreviousValue-DXHpM-IF.js";import"./Loader-CX4tnt7K.js";import"./useDelayedRender-CB_3PSaV.js";/* empty css               *//* empty css               */import"./Flex-E12KrtQl.js";import"./SlotComponent-CaapzmwU.js";import"./mergeRefs-lBRNfHXH.js";import"./BaseRadioButton.stories-CUJSJGov.js";import"./BaseRadioButton-C6Q37EY8.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
