import{r as a,j as p}from"./iframe-E3LxW3tq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-CLdOXMnh.js";import{H as s,m as n}from"./Help.stories-DFWcFam-.js";import c from"./RadioButton.stories-yle_R3FZ.js";import{F as d}from"./FieldGroup-CU_M-_Wv.js";import{C as l}from"./Checkbox-LQ01pvP5.js";import{R as u}from"./RadioButton-DjG5TigA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-Bm-Q-HzJ.js";import"./Button-D2c8p_M2.js";import"./usePreviousValue-P0OS_6mj.js";import"./Loader-DElOnxuk.js";import"./useDelayedRender-njwODQyD.js";/* empty css               *//* empty css               */import"./Flex-D-LoHXSP.js";import"./SlotComponent-D9tyMyFW.js";import"./mergeRefs-B2_TKNml.js";import"./BaseRadioButton.stories-_GaztHZ5.js";import"./BaseRadioButton-Cwu_f_zK.js";import"./useId-OgLZVri4.js";/* empty css               */import"./Label-CE9yzs4A.js";import"./SupportLabel-CiQ7TVcR.js";import"./WarningIcon-D7M92sfg.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
