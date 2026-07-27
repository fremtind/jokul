import{r as p,j as i}from"./iframe-K9Il6deX.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CXKcacJ3.js";import l from"./Help.stories-CoVtrWT2.js";import c from"./RadioButton.stories-BuN8LkaI.js";import{F as d}from"./FieldGroup-B_6JhBhF.js";import{C as k,a as u}from"./CheckboxPanel.stories-Orva4pQj.js";import{RadioPanel as g}from"./RadioPanel.stories-D2HO2qis.js";import{C as h}from"./Checkbox-B7xs5IvU.js";import{R as b}from"./RadioPanel-D08X7O5O.js";import{H as x}from"./Help-BhJJHL_W.js";import{R as C}from"./RadioButton-BB8q2ZKQ.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-IQAjAiH0.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-z0-XxcVF.js";import"./mergeRefs-CCzphKB1.js";import"./BaseRadioButton.stories--ZHF0QvY.js";import"./BaseRadioButton-BoFz3bCF.js";import"./useId-BRmEO37g.js";import"./Label-DiABTGZP.js";import"./SupportLabel-iHABdbXi.js";import"./SuccessIcon-mAq983Gv.js";import"./Icon-Dtflrzde.js";import"./WarningIcon-C_Gm2eNP.js";import"./InputPanel-CB3gpJj8.js";import"./Button-NVC6jV7j.js";import"./usePreviousValue-C1foMAv-.js";import"./Loader-RMG3T-JR.js";import"./useDelayedRender-XBnSTJM3.js";import"./Title-K7mwkJTG.js";import"./Card-DKOuJPtD.js";import"./Text-DYOtJO0u.js";import"./Tag-BBVAFs5j.js";import"./ExpandablePanel-BGmDxbMz.js";import"./useAnimatedHeightBetween-Dt8uJBi7.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DoKJZPca.js";import"./Expander-yACZ5-6C.js";import"./ChevronDownIcon-r6edfwjd.js";import"./ChevronUpIcon-BU2A5j1_.js";import"./ListItem-BUs6bEld.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
