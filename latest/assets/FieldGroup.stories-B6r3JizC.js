import{r as n,j as i}from"./iframe-CD9CZqvR.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BgrohhIp.js";import{CheckboxStory as c}from"./Checkbox.stories-qEejwXiq.js";import d from"./Help.stories-BDRbJHSJ.js";import k from"./RadioButton.stories-CHi-2x5i.js";import{RadioPanel as u}from"./RadioPanel.stories-1NWmsg2p.js";import{F as g}from"./FieldGroup-DmyAzwiy.js";import{C as h}from"./Checkbox-CB0zxD5d.js";import{R as b}from"./RadioPanel-BA71Bw5p.js";import{H as x}from"./Help-CvGfORw1.js";import{R as C}from"./RadioButton-1C58A_Fg.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D7wDs4yd.js";import"./clsx-B-dksMZM.js";import"./Flex-b2zTGoP_.js";import"./SlotComponent-CMzEMrFQ.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-WWWXm3yD.js";import"./usePreviousValue-DPfSW5ez.js";import"./Loader-8W4RyHtd.js";import"./useDelayedRender-BQTVp7JT.js";import"./useId-BBE_y2x5.js";import"./Label-klrn9LMA.js";import"./SupportLabel-Dbqsw5LZ.js";import"./SuccessIcon-B7X-0EYG.js";import"./Icon-CpAuQdJu.js";import"./WarningIcon-CjVjlawU.js";import"./BaseRadioButton.stories-DzyvKeUW.js";import"./BaseRadioButton-oSY9cGV1.js";import"./Title-nSaF1icu.js";import"./Card-DOxxP9OQ.js";import"./Text-Bq0vBNWO.js";import"./Tag-O-QawGrW.js";import"./ExpandablePanel-B8eDch83.js";import"./useAnimatedHeightBetween-fs-y35i8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BZN8fA7M.js";import"./Expander-e54iTpuQ.js";import"./ChevronUpIcon-DDXs6hPg.js";import"./ListItem-CkEzU_3f.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}},ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ie as __namedExportsOrder,pe as default};
