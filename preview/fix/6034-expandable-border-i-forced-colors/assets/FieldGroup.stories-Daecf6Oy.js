import{r as a,j as p}from"./iframe-COLkEyaE.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-TCQOXfsR.js";import{H as s,m as n}from"./Help.stories-BFrkQ8q7.js";import c from"./RadioButton.stories-uCh2idSN.js";import{F as d}from"./FieldGroup-CmmY1VXx.js";import{C as l}from"./Checkbox-65_PE06G.js";import{R as u}from"./RadioButton-58Xw_PKr.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-BgJy-9Dm.js";import"./Button-D8_Sg6_t.js";import"./usePreviousValue-Osr7peI5.js";import"./Loader-FUKYsYdh.js";import"./useDelayedRender-BIRYx3nd.js";/* empty css               *//* empty css               */import"./Flex-vr7dCsaK.js";import"./SlotComponent-CJbHw89G.js";import"./mergeRefs-BzCGU5ZQ.js";import"./BaseRadioButton.stories-M2qQIKCK.js";import"./BaseRadioButton-KomOBnCR.js";import"./useId-DmncUP2J.js";/* empty css               */import"./Label-BA1i7aLq.js";import"./SupportLabel-DF8Etnnv.js";import"./WarningIcon-26JYH6K0.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
