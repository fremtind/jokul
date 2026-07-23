import{r as p,j as i}from"./iframe-DXtd7ZLs.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CBi5oVR9.js";import l from"./Help.stories-BIJo5Z1A.js";import c from"./RadioButton.stories-D5rEPnIc.js";import{F as d}from"./FieldGroup-B4Cz6eze.js";import{C as k,a as u}from"./CheckboxPanel.stories-DdNB5ol-.js";import{RadioPanel as g}from"./RadioPanel.stories-DahZpVPr.js";import{C as h}from"./Checkbox-HBlf9Wbq.js";import{R as b}from"./RadioPanel-B-18bZ94.js";import{H as x}from"./Help-44UEBnJL.js";import{R as C}from"./RadioButton-DCN9TV7j.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-_l42_KjK.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-DVzDZLzn.js";import"./mergeRefs-Brm-Ssyg.js";import"./BaseRadioButton.stories-Bs2hlfIy.js";import"./BaseRadioButton-Dw_kGnkv.js";import"./useId-lY7SW1FK.js";import"./Label-Cn0bjoaP.js";import"./SupportLabel-DlG5bd5s.js";import"./SuccessIcon-PY1NNQ4H.js";import"./Icon-DhJkfN19.js";import"./WarningIcon-BTPcNa1G.js";import"./InputPanel-CPLeE_R7.js";import"./Button-CmppnUCT.js";import"./usePreviousValue-D6ZvhIW5.js";import"./Loader-Blv3ueW-.js";import"./useDelayedRender-Ya6-B6fq.js";import"./Title-nXctHr8j.js";import"./Card-BSAXDmV-.js";import"./Text-DT3NxfdM.js";import"./Tag-CnpLyCiS.js";import"./ExpandablePanel-vfxSzFxh.js";import"./useAnimatedHeightBetween--Hi0iIUb.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-D6JCEB0W.js";import"./Expander-xd3eSRLE.js";import"./ChevronUpIcon-BuPNKTh1.js";import"./ListItem-CqpekDvR.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
