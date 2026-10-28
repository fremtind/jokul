import{r as n,j as i}from"./iframe-CBVG69-g.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CSZvdpVF.js";import{CheckboxStory as c}from"./Checkbox.stories-DDT4Oork.js";import d from"./Help.stories-DYX3-DJS.js";import k from"./RadioButton.stories-CcRAEpXr.js";import{RadioPanel as u}from"./RadioPanel.stories-CQELGH7Y.js";import{F as g}from"./FieldGroup-BKYUMqMy.js";import{C as h}from"./Checkbox-B4lM-X7F.js";import{R as b}from"./RadioPanel-DnzAbmso.js";import{H as x}from"./Help-apaFS0zK.js";import{R as C}from"./RadioButton-CX1VJCW-.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-CwBcvaYX.js";import"./clsx-B-dksMZM.js";import"./Flex-Dy2_JSME.js";import"./SlotComponent-a4sO6t02.js";import"./mergeRefs-BJaMNf0t.js";import"./Button-CLGkZSBa.js";import"./usePreviousValue-BvKoWOHk.js";import"./Loader-DUdV2yCY.js";import"./useDelayedRender-BS6JgW8x.js";import"./useId-BwFmOqRc.js";import"./Label-BoRzkDSO.js";import"./SupportLabel-DwTKeu_a.js";import"./SuccessIcon-C4ZAyDGC.js";import"./Icon-zmLN43fW.js";import"./WarningIcon-CcOMZavh.js";import"./BaseRadioButton.stories-0NP65OSe.js";import"./BaseRadioButton-BFSwfGge.js";import"./Title-CYxFx1JD.js";import"./Card-DKIel7_A.js";import"./Text-w-V9Hxs-.js";import"./Tag-D_Josgsq.js";import"./ExpandablePanel-DsisKz0O.js";import"./useAnimatedHeightBetween-Cjj1bY_8.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-BTF-_l74.js";import"./Expander-DLvbTkeC.js";import"./ChevronUpIcon-iG31F-ok.js";import"./ListItem-i-WZyEY_.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
