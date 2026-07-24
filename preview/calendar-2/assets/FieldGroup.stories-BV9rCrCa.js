import{r as p,j as i}from"./iframe-DOGnsXL-.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DXfL83UG.js";import l from"./Help.stories-ECZ0xvGb.js";import c from"./RadioButton.stories-DWWRegiV.js";import{F as d}from"./FieldGroup-DunWP6dZ.js";import{C as k,a as u}from"./CheckboxPanel.stories-BuKfWxhl.js";import{RadioPanel as g}from"./RadioPanel.stories-DWMyreyo.js";import{C as h}from"./Checkbox-BHOHshp8.js";import{R as b}from"./RadioPanel-vPViIdvh.js";import{H as x}from"./Help-DmWbAiZW.js";import{R as C}from"./RadioButton-LP1cgkvK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Dq6nG81M.js";import"./Label-CpSEfxht.js";import"./SupportLabel-CBHuDz12.js";import"./SuccessIcon-DlRo9NKk.js";import"./Icon-jWDh-j8H.js";import"./WarningIcon-B06b2JL6.js";/* empty css               *//* empty css               */import"./Flex-DNIyskBp.js";import"./SlotComponent-B83S1Gh5.js";import"./mergeRefs-DJs1BG91.js";import"./BaseRadioButton.stories-BVT9dQZi.js";import"./BaseRadioButton-BA_M4NKC.js";import"./InputPanel-CRQ5CFpH.js";import"./Button-DatrOgoB.js";import"./usePreviousValue-CcjplcU6.js";import"./Loader-B3pRtGCb.js";import"./useDelayedRender-B5jVceKN.js";import"./Title-CQLy4wW9.js";import"./Card-B5mLnJzc.js";import"./Text-DKKJL132.js";import"./Tag-BlTZzUIT.js";import"./ExpandablePanel-DcwR8XUE.js";import"./useAnimatedHeightBetween-DorgKIzF.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-8rOPO35m.js";import"./Expander-BeQbAs0h.js";import"./ChevronUpIcon-DoEDDqXR.js";import"./ListItem-Dme_E4LM.js";const se={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
