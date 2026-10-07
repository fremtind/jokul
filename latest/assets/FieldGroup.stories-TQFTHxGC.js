import{r as n,j as i}from"./iframe-USWoWCIe.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-S_a_cYwF.js";import{CheckboxStory as c}from"./Checkbox.stories-D3abmUcV.js";import d from"./Help.stories-DjD9ZGiO.js";import k from"./RadioButton.stories-BH7cpogU.js";import{RadioPanel as u}from"./RadioPanel.stories-DVRzeCJl.js";import{F as g}from"./FieldGroup-CKqhiqzg.js";import{C as h}from"./Checkbox-DX9-UOPL.js";import{R as b}from"./RadioPanel-FkSqrbUc.js";import{H as x}from"./Help-BGLLgoqS.js";import{R as C}from"./RadioButton-DmJy8wfk.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-fwX9VvL6.js";import"./clsx-B-dksMZM.js";import"./Flex-DIwQShiD.js";import"./SlotComponent-DIPDq9E2.js";import"./mergeRefs-CrkP1DBD.js";import"./Button-CN4KTM4c.js";import"./usePreviousValue-DPU7adKb.js";import"./Loader-DIUjrzTi.js";import"./useDelayedRender-DdZXeRtY.js";import"./useId-aCx91wUY.js";import"./Label-B9pJpODL.js";import"./SupportLabel-y-iSdNHL.js";import"./SuccessIcon-mrQOedGW.js";import"./Icon-CaC7nlE4.js";import"./WarningIcon-C9Xu0JOT.js";import"./BaseRadioButton.stories-D9HB-FYk.js";import"./BaseRadioButton-hPATPy2m.js";import"./Title-Djk_7k7T.js";import"./Card-CjMdDS_0.js";import"./Text-D1jplqMM.js";import"./Tag-DkPgjZpA.js";import"./ExpandablePanel-D3Stp4cY.js";import"./useAnimatedHeightBetween-DdCZLFwZ.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-B9pMa0Al.js";import"./Expander-DoCoZaeg.js";import"./ChevronUpIcon-NK4iFNVd.js";import"./ListItem-S7X5jLfz.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
