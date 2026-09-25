import{r as n,j as i}from"./iframe-tF_CnVKD.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-Bg-gXQ-M.js";import{CheckboxStory as c}from"./Checkbox.stories-wyreGeAP.js";import d from"./Help.stories-DFvEUhDo.js";import k from"./RadioButton.stories-JPWlcUQP.js";import{RadioPanel as u}from"./RadioPanel.stories-C8-TIumU.js";import{F as g}from"./FieldGroup-DwAPzxxX.js";import{C as h}from"./Checkbox-BKcroEIH.js";import{R as b}from"./RadioPanel-B2cheiRg.js";import{H as x}from"./Help-B_BK2jV-.js";import{R as C}from"./RadioButton-BFU_O1Mp.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-DELrOpvQ.js";import"./clsx-B-dksMZM.js";import"./Flex-WY5wPI5J.js";import"./SlotComponent-DjFSykP9.js";import"./mergeRefs-tBIqzsLa.js";import"./Button-DcQI9tPz.js";import"./usePreviousValue-BSNs7mtE.js";import"./Loader-CK4QW_c6.js";import"./useDelayedRender-CR5b2a_S.js";import"./useId-CIFzEpsK.js";import"./Label-BepanNqi.js";import"./SupportLabel-BDHOOh0H.js";import"./SuccessIcon-Cp4HEYx5.js";import"./Icon-DoM_Brou.js";import"./WarningIcon-DHDBZGUq.js";import"./BaseRadioButton.stories-CwMinDNL.js";import"./BaseRadioButton-DFrr0WG_.js";import"./Title-C1E2_ho1.js";import"./Card-IFtqcUZZ.js";import"./Text-LPr1l4I6.js";import"./Tag-DIQEfbGs.js";import"./ExpandablePanel-DK3AWcAM.js";import"./useAnimatedHeightBetween-RH_2lYvM.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-ClGu6Sjd.js";import"./Expander-BOYWSsQn.js";import"./ChevronUpIcon-C17xU2Pl.js";import"./ListItem-CqE4SQ7D.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
