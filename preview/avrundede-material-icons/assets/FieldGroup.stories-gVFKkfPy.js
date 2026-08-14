import{r as p,j as i}from"./iframe-D6V2Ut_x.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-2aEN0_bq.js";import l from"./Help.stories-B8bVPW6R.js";import c from"./RadioButton.stories-245-e25A.js";import{F as d}from"./FieldGroup-DnbrR3Ti.js";import{C as k,a as u}from"./CheckboxPanel.stories-C1tiERps.js";import{RadioPanel as g}from"./RadioPanel.stories-jX6Wqe01.js";import{C as h}from"./Checkbox-BfJqakdy.js";import{R as b}from"./RadioPanel-Cmpm53wp.js";import{H as x}from"./Help-DzvQrcRp.js";import{R as C}from"./RadioButton-Dcvqctbs.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CF_o-2ua.js";import"./BaseRadioButton-D-vRySpJ.js";import"./clsx-B-dksMZM.js";import"./useId-wHDLXxyy.js";import"./Label-Babbw4A0.js";import"./SupportLabel-B22ZqrQ-.js";import"./SuccessIcon-B4M1bF5y.js";import"./Icon-Dd2ytlL1.js";import"./WarningIcon-zqLCjo-N.js";import"./InputPanel-CoHkZSGr.js";import"./Flex-CVKsfBEF.js";import"./SlotComponent-Gsz46581.js";import"./mergeRefs-DCcxT01G.js";import"./Button-C0BH0hK9.js";import"./usePreviousValue-C26Xp-Pw.js";import"./Loader-vaCpQrlY.js";import"./useDelayedRender-B2Yo41b6.js";import"./Title-0pcqv07h.js";import"./Card-CodF4rGt.js";import"./Text-BMpWh14i.js";import"./Tag-BcCNpVJE.js";import"./ExpandablePanel-DO83Z8su.js";import"./useAnimatedHeightBetween-pMMYsRSh.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Icb_KnZj.js";import"./Expander-DIWN5mp4.js";import"./ChevronDownIcon-WqDD2FTI.js";import"./ChevronUpIcon-Bo30Rgps.js";import"./ListItem-B66vyaUB.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
