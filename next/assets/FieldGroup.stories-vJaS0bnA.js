import{r as p,j as i}from"./iframe-5Ej-9cBK.js";import{c as s}from"./contactChoices-BqDGeJnV.js";import{C as l,a as d}from"./CheckboxPanel.stories-B4SGhdir.js";import{CheckboxStory as c}from"./Checkbox.stories-MYqPKENW.js";import k from"./Help.stories-DHw_eIZ0.js";import u from"./RadioButton.stories-BZsAGNTP.js";import{RadioPanel as g}from"./RadioPanel.stories-qjN-rSos.js";import{F as h}from"./FieldGroup-CxVCPM-G.js";import{C as b}from"./Checkbox-CnUdci8a.js";import{R as x}from"./RadioPanel-D944ShI0.js";import{H as C}from"./Help-CiTrNeN3.js";import{R as G}from"./RadioButton-FvVirxey.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DvdJBO8E.js";import"./clsx-B-dksMZM.js";import"./Flex-jC5EYJxR.js";import"./SlotComponent-BxN4NUeE.js";import"./mergeRefs-_7lZvp9j.js";import"./Button-6zzjqvkW.js";import"./usePreviousValue-CEvzqZGo.js";import"./Loader-e0yN6epg.js";import"./useDelayedRender-Mb8QHgNB.js";import"./useId-Tgr1C5Ky.js";import"./Label-C0GuFZNe.js";import"./SupportLabel-DVL-dBwI.js";import"./SuccessIcon-DPG-2EwA.js";import"./Icon-CwvX68sH.js";import"./WarningIcon-CWi4oa_N.js";import"./BaseRadioButton.stories-jIAfUbZ1.js";import"./BaseRadioButton-BM-2-vyR.js";import"./Title-CSnfLiI4.js";import"./Card-IBrjDN0D.js";import"./Text-7bHc8d5f.js";import"./Tag-CCdp_MG0.js";import"./ExpandablePanel-d9Kl3-ID.js";import"./useAnimatedHeightBetween-BC6hRy5P.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DkrRe13a.js";import"./Expander-CXHmhpqy.js";import"./ChevronUpIcon-DVMTafx_.js";import"./ListItem-ejwqxxz2.js";const se={title:"Komponenter/Field Group",component:h,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:s.map(e=>p.createElement(G,{...u.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(b,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(l,{...d.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:s.map(e=>p.createElement(x,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},n={name:"Legend som sideoverskrift",args:{legend:"Hvordan vil du bli kontaktet?",labelProps:{pageHeading:!0}}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(C,{...k.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Legend som sideoverskrift",
  args: {
    legend: "Hvordan vil du bli kontaktet?",
    labelProps: {
      pageHeading: true
    }
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Field Group med tooltip",
  args: {
    tooltip: <Help {...HelpStories.args} />
  }
}`,...m.parameters?.docs?.source}}};const ie=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","LegendSomSideoverskrift","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,n as LegendSomSideoverskrift,o as RadioGroup,ie as __namedExportsOrder,se as default};
