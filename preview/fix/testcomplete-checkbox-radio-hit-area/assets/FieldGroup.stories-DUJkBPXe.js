import{j as p,r as a}from"./iframe-DSqg8Qmn.js";import{c as m}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as i}from"./Checkbox.stories-Dq3RlpET.js";import{H as s,m as n}from"./Help.stories-CZttXwoP.js";import c from"./RadioButton.stories-C7-_rGel.js";import{F as d}from"./FieldGroup-BfFT1a5S.js";import{R as l}from"./RadioButton-BNajcYgu.js";import{C as u}from"./Checkbox-ZXwLzTnG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BLf5ytHb.js";import"./Label-D82hE8y8.js";import"./SupportLabel-Bqj58HTJ.js";import"./WarningIcon-BMXZalvw.js";import"./Icon-28T3V2gn.js";import"./Button-Dh6Dx4iG.js";import"./usePreviousValue-D1nqrAdP.js";import"./Loader-CECGGhYu.js";import"./useDelayedRender-CghuzFR5.js";/* empty css               *//* empty css               */import"./Flex-C2OhoUff.js";import"./SlotComponent-B6_oumQz.js";import"./mergeRefs-OLWl9otD.js";import"./BaseRadioButton.stories-9jcaQTam.js";import"./BaseRadioButton-jBnhx8-E.js";const q={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:m.map(e=>a.createElement(l,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:m.map(e=>a.createElement(u,{...i.args,key:e,value:e,name:"kontaktmetode"},e))}},t={name:"Field Group med tooltip",args:{tooltip:p.jsx(s,{...n.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
