import{r as p,j as i}from"./iframe-KItkfgcw.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BVjfTnGs.js";import l from"./Help.stories-CXJ0O7lp.js";import c from"./RadioButton.stories-CBCLS48c.js";import{F as d}from"./FieldGroup-BMMj0On7.js";import{C as k,a as u}from"./CheckboxPanel.stories-D0-sAvx9.js";import{RadioPanel as g}from"./RadioPanel.stories-BzYxsSLQ.js";import{C as h}from"./Checkbox-BRqLo26T.js";import{R as b}from"./RadioPanel-d3G7sVKa.js";import{H as x}from"./Help-TTwNuvWn.js";import{R as C}from"./RadioButton-B9jLcZEV.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-DF56El8A.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DUP2RdQE.js";import"./mergeRefs-ChiBqUy9.js";import"./BaseRadioButton.stories-C3MBYfw3.js";import"./BaseRadioButton-BVJjtwWm.js";import"./useId-C4duorAJ.js";import"./Label-DOTtOj9Z.js";import"./SupportLabel-mSKz0NyD.js";import"./SuccessIcon-CT6Fukqk.js";import"./Icon-4x9umD4b.js";import"./WarningIcon-BWsW3-LG.js";import"./InputPanel-DzqdFxcK.js";import"./Button-n86XsCNq.js";import"./usePreviousValue-0qGNAk_w.js";import"./Loader-DVHuJolb.js";import"./useDelayedRender-kI9RhS6j.js";import"./Title-HZA9VR8Y.js";import"./Card-PJmY0_-B.js";import"./Text-jouLcB5o.js";import"./Tag-v-BsnDYC.js";import"./ExpandablePanel-1BTQi6V6.js";import"./useAnimatedHeightBetween-BKH_yg6t.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-B8pDmgYB.js";import"./Expander-B7TyFpVZ.js";import"./ChevronDownIcon-CMTAXrbB.js";import"./ChevronUpIcon-DfjLWdau.js";import"./ListItem-CYI70I6s.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
