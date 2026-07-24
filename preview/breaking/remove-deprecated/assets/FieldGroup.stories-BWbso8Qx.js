import{r as p,j as i}from"./iframe-uvQ3MtjS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CpqAk_n7.js";import l from"./Help.stories-CDEqa-9Y.js";import c from"./RadioButton.stories-CWJYG0Oo.js";import{F as d}from"./FieldGroup-CTmU0l1k.js";import{C as k,a as u}from"./CheckboxPanel.stories-RZzJVoKB.js";import{RadioPanel as g}from"./RadioPanel.stories-BH3CpAJV.js";import{C as h}from"./Checkbox-C-wrX2pm.js";import{R as b}from"./RadioPanel-BshWRvJ7.js";import{H as x}from"./Help-BjlyW5lK.js";import{R as C}from"./RadioButton-BOpoFWh_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-35woAFVB.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-B8N0k6z3.js";import"./mergeRefs-CZGEuZXV.js";import"./BaseRadioButton.stories-vtSUhfac.js";import"./BaseRadioButton-CBfLZS0E.js";import"./useId-CW5eSEGV.js";import"./Label-DGJcJja8.js";import"./SupportLabel-Br8lgooy.js";import"./SuccessIcon-BA6lGZUb.js";import"./Icon-BuLhrzqS.js";import"./WarningIcon-xfF6yOtl.js";import"./InputPanel-DhUE-0P8.js";import"./Button-BhRtjeBk.js";import"./usePreviousValue-DDDOnD0w.js";import"./Loader-DEuHOFMn.js";import"./useDelayedRender-G1V7G-8r.js";import"./Title-pyaMi-L7.js";import"./Card-BMxpq-DO.js";import"./Text-KMKbRmUN.js";import"./Tag-D58UVO22.js";import"./ExpandablePanel-D_A4mF5S.js";import"./useAnimatedHeightBetween-rBIV-wBO.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-EnmmWUm6.js";import"./Expander-SHhS7g8P.js";import"./ChevronDownIcon-BLguyxL2.js";import"./ChevronUpIcon-CfQfhrH9.js";import"./ListItem-WC_bR2Pz.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
