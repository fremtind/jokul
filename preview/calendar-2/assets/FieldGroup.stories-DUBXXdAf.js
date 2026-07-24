import{r as p,j as i}from"./iframe-DfZbZRHL.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-C87Gi9oR.js";import l from"./Help.stories-CfipfVUl.js";import c from"./RadioButton.stories-DLJ7F6_E.js";import{F as d}from"./FieldGroup-PlP177NW.js";import{C as k,a as u}from"./CheckboxPanel.stories-DBlrkYU8.js";import{RadioPanel as g}from"./RadioPanel.stories-BUKZS6GW.js";import{C as h}from"./Checkbox-Bmthq4aN.js";import{R as b}from"./RadioPanel-Bqe5bwTH.js";import{H as x}from"./Help-CymeMxRC.js";import{R as C}from"./RadioButton-DApmGOTS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Bce2o3hm.js";import"./Label-CbSQBFLq.js";import"./SupportLabel-CvvjPTrp.js";import"./SuccessIcon-eZtQQNxV.js";import"./Icon-Gg4rskpN.js";import"./WarningIcon-BRBElCt6.js";/* empty css               *//* empty css               */import"./Flex-BaVOTHeX.js";import"./SlotComponent-BhLcOJ7_.js";import"./mergeRefs-BdjpnZir.js";import"./BaseRadioButton.stories-D8ImBPsD.js";import"./BaseRadioButton-C6wX9-MC.js";import"./InputPanel-BeAsggLd.js";import"./Button-Dmen6Gxe.js";import"./usePreviousValue-faukJtvN.js";import"./Loader-CQ4GNsB3.js";import"./useDelayedRender-DsPfvRg-.js";import"./Title-C1SJRBUq.js";import"./Card-DreRv_1h.js";import"./Text-BEjncQq-.js";import"./Tag-Xsuolz4w.js";import"./ExpandablePanel-B1M40qFQ.js";import"./useAnimatedHeightBetween-FZ3Z_gEG.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DQzoQxHh.js";import"./Expander-cHr45b_A.js";import"./ChevronUpIcon-DZ-jYmYO.js";import"./ListItem-CA92JL6S.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const le=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,le as __namedExportsOrder,se as default};
