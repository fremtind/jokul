import{r as p,j as i}from"./iframe-DoW9j8BH.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BUvFvEHZ.js";import l from"./Help.stories-DRH8Zaj-.js";import c from"./RadioButton.stories-DjQNoBOS.js";import{F as d}from"./FieldGroup-priSB5uj.js";import{C as k,a as u}from"./CheckboxPanel.stories-DdH96cH5.js";import{RadioPanel as g}from"./RadioPanel.stories-cc30kN4h.js";import{C as h}from"./Checkbox-Db-mrc1i.js";import{R as b}from"./RadioPanel-CfBBNc6d.js";import{H as x}from"./Help-C10B0HDW.js";import{R as C}from"./RadioButton-gYubJ_0_.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CTc2KBTm.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-BvwZJitf.js";import"./mergeRefs-DjzhuD4A.js";import"./BaseRadioButton.stories-CA5UZslP.js";import"./BaseRadioButton-DwTP0j0a.js";import"./useId-CaK2Is8H.js";import"./Label-D9X1g914.js";import"./SupportLabel-CXz7XwTX.js";import"./SuccessIcon-XNHNdUwW.js";import"./Icon-Dr-nHL-f.js";import"./WarningIcon-CBDphsKY.js";import"./InputPanel-BwZLeEev.js";import"./Button-DGh5Y3CM.js";import"./usePreviousValue-DnmVnIei.js";import"./Loader-C-LDPdm9.js";import"./useDelayedRender-BdRTi_cc.js";import"./Title-DPBqYu1_.js";import"./Card-qBDrdv4h.js";import"./Text-Dcc56d62.js";import"./Tag-JBKkljjn.js";import"./ExpandablePanel-Dga_3ols.js";import"./useAnimatedHeightBetween-DSLi22i8.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-BgqEeAGi.js";import"./Expander-D-4MX2av.js";import"./ChevronDownIcon-X7gDO6P9.js";import"./ChevronUpIcon-wWjFySXR.js";import"./ListItem-C8ugMPJX.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
