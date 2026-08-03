import{r as p,j as i}from"./iframe-yshzEluW.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-3cFCm2w3.js";import l from"./Help.stories-BZ-RRqAn.js";import c from"./RadioButton.stories-CrBgF3NE.js";import{F as d}from"./FieldGroup-Cs-75qEy.js";import{C as k,a as u}from"./CheckboxPanel.stories-DtRyOFbe.js";import{RadioPanel as g}from"./RadioPanel.stories-BaAVNmsk.js";import{C as h}from"./Checkbox-BS4VC2pL.js";import{R as b}from"./RadioPanel-BDUHJEyi.js";import{H as x}from"./Help-2kxk7S8N.js";import{R as C}from"./RadioButton-Do2GgvIM.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D7o3iNHj.js";import"./BaseRadioButton-BGCtltPz.js";import"./clsx-B-dksMZM.js";import"./useId-CVTW4aGV.js";import"./Label-CSofdoRM.js";import"./SupportLabel-Bc_b7yqB.js";import"./SuccessIcon-BBWyIP5M.js";import"./Icon-RDx2ewb6.js";import"./WarningIcon-BmQRxIuY.js";import"./InputPanel-BiVb-T8J.js";import"./Flex-B2InfC8y.js";import"./SlotComponent-EbHsoj8Q.js";import"./mergeRefs-BfEZpvcp.js";import"./Button-D7GVTUuF.js";import"./usePreviousValue-CSzgYwbl.js";import"./Loader-BzYLYWDN.js";import"./useDelayedRender-Bhi_qSuF.js";import"./Title-65fhQUrv.js";import"./Card-BHOVRsV4.js";import"./Text-BxuYKyQ7.js";import"./Tag-CwKNc00t.js";import"./ExpandablePanel-DcOzssJ9.js";import"./useAnimatedHeightBetween-C1Uvhrp9.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DTVBKY0c.js";import"./Expander-DDYPXRdU.js";import"./ChevronDownIcon-DA_OVkim.js";import"./ChevronUpIcon-DamEUZ6c.js";import"./ListItem-DJvYmkRN.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const se=["RadioGroup","FieldGroupCheckboxGroup","FieldGroupCheckboxPanelGroup","FieldGroupRadioPanelGroup","GroupWithTooltip"];export{r as FieldGroupCheckboxGroup,a as FieldGroupCheckboxPanelGroup,t as FieldGroupRadioPanelGroup,m as GroupWithTooltip,o as RadioGroup,se as __namedExportsOrder,ie as default};
