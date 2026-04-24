import{j as p,r as a}from"./iframe-illFs_Te.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-LTqWYniE.js";import{H as s,m as n}from"./Help.stories-CBlUNIwO.js";import c from"./RadioButton.stories-D7qBbqDD.js";import{F as d}from"./FieldGroup-BdVy5CPf.js";import{R as l}from"./RadioButton-bnQxydTs.js";import{C as u}from"./Checkbox-DxLr3J0U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-wljYcXyt.js";import"./Label-5QRN9Fiy.js";import"./SupportLabel-DJQuAjie.js";import"./WarningIcon-d3pJ-8eG.js";import"./Icon-CH1BMC1g.js";import"./Button-Dry7D_W2.js";import"./usePreviousValue-FsK9tu0K.js";import"./Loader-Ck_yjdjv.js";import"./useDelayedRender-HHtJr1n0.js";/* empty css               *//* empty css               */import"./Flex-B4N6lNRx.js";import"./SlotComponent-hBhGhgf0.js";import"./mergeRefs-CJ-S5cZg.js";import"./BaseRadioButton.stories-BtVfTXuv.js";import"./BaseRadioButton-BTqG_dt7.js";/* empty css               */const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(l,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(u,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
