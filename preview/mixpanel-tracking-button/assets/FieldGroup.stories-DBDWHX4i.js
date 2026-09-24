import{r as n,j as i}from"./iframe-DNo5Kdiv.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-qYl_AgFq.js";import{CheckboxStory as c}from"./Checkbox.stories-BzD0vGtu.js";import d from"./Help.stories-DAlkPvOQ.js";import k from"./RadioButton.stories-CyVUQJQF.js";import{RadioPanel as u}from"./RadioPanel.stories-DZfWp8Xi.js";import{F as g}from"./FieldGroup-sanLV02O.js";import{C as h}from"./Checkbox-BAOTCTQA.js";import{R as b}from"./RadioPanel-Ccco1WAT.js";import{H as x}from"./Help-CfRXGv4G.js";import{R as C}from"./RadioButton-_cQhax8Q.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DKoBKZ43.js";import"./clsx-B-dksMZM.js";import"./Flex-DwfP-395.js";import"./SlotComponent-B_8SVJVn.js";import"./mergeRefs-CzAatY9Q.js";import"./Button-DH6CpTiD.js";import"./usePreviousValue-IPyDqrg8.js";import"./Loader-CMecUdlC.js";import"./useDelayedRender-pwYrTOSi.js";import"./useId-kvkxBvIU.js";import"./Label--W2DkRVs.js";import"./SupportLabel--Rpq3HzI.js";import"./SuccessIcon-BWcqNXXY.js";import"./Icon-DyTFlY-Z.js";import"./WarningIcon-B8uY8EZ6.js";import"./BaseRadioButton.stories-Bae3g4w_.js";import"./BaseRadioButton-B0Shwzem.js";import"./Title-euAB8aKz.js";import"./Card-wIjUXf07.js";import"./Text-Iuy-08QW.js";import"./Tag-DZCxPz1o.js";import"./ExpandablePanel-CHWx3UsF.js";import"./useAnimatedHeightBetween-BcaAQyLe.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BDhcW6VM.js";import"./Expander-Dp8nJurd.js";import"./ChevronUpIcon-D4IuPoWW.js";import"./ListItem-D349aDTj.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Radio gruppe"
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Checkbox gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <Checkbox {...CheckboxStory.args} key={value} value={value} name="kontaktmetode">
                {value}
            </Checkbox>)
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Checkbox panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <CheckboxPanel {...CheckboxPanelStory.args} key={value} value={value} name="kontaktmetode" label={value}>
                {value}
            </CheckboxPanel>)
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Radio panel gruppe",
  args: {
    legend: "Velg kontaktmetoder",
    children: contactChoices.map(value => <RadioPanel {...RadioPanelStory.args} key={value} value={value} name="kontaktmetode" label={value} />)
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
