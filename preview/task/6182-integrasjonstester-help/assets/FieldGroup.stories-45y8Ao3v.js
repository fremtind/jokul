import{r as a,j as p}from"./iframe-DpF8-eVq.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-B3I_TnPR.js";import{H as s,m as n}from"./Help.stories-TVm9Kl3G.js";import c from"./RadioButton.stories-B9GR8QoJ.js";import{F as d}from"./FieldGroup-C4kNHfhb.js";import{C as l}from"./Checkbox-B_3A12_O.js";import{R as u}from"./RadioButton-3k1gyQlJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Icon-lMYEhilh.js";import"./Button-sCti2iSa.js";import"./usePreviousValue-UwLE5R5U.js";import"./Loader-D0t9E4u2.js";import"./useDelayedRender-B2ACuQ0U.js";/* empty css               *//* empty css               */import"./Flex-BVKkOaHN.js";import"./SlotComponent-CRksuOYB.js";import"./mergeRefs-BApRX_wn.js";import"./BaseRadioButton.stories-CMQkRfiH.js";import"./BaseRadioButton-plaCzTFw.js";import"./useId-Ch2dWS69.js";/* empty css               */import"./Label-Dh6YDXhK.js";import"./SupportLabel-B-tvvpzY.js";import"./WarningIcon-D0g-Loa5.js";const w={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(o=>a.createElement(u,{...c.args,key:o,value:o,name:"Kontaktmetode(r)"},o))}},e={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(o=>a.createElement(l,{...i.args,key:o,value:o,name:"kontaktmetode"},o))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
