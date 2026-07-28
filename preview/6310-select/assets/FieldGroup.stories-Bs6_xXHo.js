import{r as p,j as i}from"./iframe-Cuz4mhIQ.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-SeFCNXgD.js";import l from"./Help.stories-D5Yztxcy.js";import c from"./RadioButton.stories-CXOv8c04.js";import{F as d}from"./FieldGroup-ZYFJe6e6.js";import{C as k,a as u}from"./CheckboxPanel.stories-CShI8A-Q.js";import{RadioPanel as g}from"./RadioPanel.stories-uLTXpCqD.js";import{C as h}from"./Checkbox-6fsiM4Bl.js";import{R as b}from"./RadioPanel-UgYXMneG.js";import{H as x}from"./Help-CA84WQAp.js";import{R as C}from"./RadioButton-DpKDvY-p.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-C9y-EPKU.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-CvidzCPD.js";import"./mergeRefs-BBOpvyyz.js";import"./BaseRadioButton.stories-pXkyvY8S.js";import"./BaseRadioButton-b8AJBz1a.js";import"./useId-ke_Vzqeq.js";import"./Label-ZXoKFcct.js";import"./SupportLabel-uiEyZz18.js";import"./SuccessIcon-BENzYc7M.js";import"./Icon-UKhFKnNA.js";import"./WarningIcon-_Fq2mUG_.js";import"./InputPanel-hYxBQPTC.js";import"./Button-Lf0TyX9c.js";import"./usePreviousValue-wUGwS2_4.js";import"./Loader-Cjl4Jerk.js";import"./useDelayedRender-veMqf3A_.js";import"./Title-DRt5WOfY.js";import"./Card-BDLxR6Nu.js";import"./Text-D-fmo5Hu.js";import"./Tag-CD_S7bmQ.js";import"./ExpandablePanel-B-S8kqUZ.js";import"./useAnimatedHeightBetween-DF1VmaDB.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-F7ej_LbD.js";import"./Expander-CI9nEj0H.js";import"./ChevronDownIcon-CbSamnbb.js";import"./ChevronUpIcon-CP9_irdj.js";import"./ListItem-UyJtYFpg.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ce=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,ce as __namedExportsOrder,le as default};
