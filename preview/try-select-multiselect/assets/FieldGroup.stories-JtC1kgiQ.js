import{r as p,j as i}from"./iframe-DJK-gxDV.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DMX_8KMq.js";import l from"./Help.stories-KdnYyZ23.js";import c from"./RadioButton.stories-BSEJdmxJ.js";import{F as d}from"./FieldGroup-CXfHxg5r.js";import{C as k,a as u}from"./CheckboxPanel.stories-Cob9sUco.js";import{RadioPanel as g}from"./RadioPanel.stories-D8A-zVSW.js";import{C as h}from"./Checkbox-BvlJedd4.js";import{R as b}from"./RadioPanel-N-m5CxhG.js";import{H as x}from"./Help-CVaqyccw.js";import{R as C}from"./RadioButton-DODK52hP.js";import"./preload-helper-PPVm8Dsz.js";/* empty css               *//* empty css               */import"./Flex-CZrUXZez.js";import"./clsx-B-dksMZM.js";import"./SlotComponent-C_KruIv1.js";import"./mergeRefs-BukdWqxl.js";import"./BaseRadioButton.stories-CLQLW8tr.js";import"./BaseRadioButton-CLaKITSy.js";import"./useId-Bl6SZGvP.js";import"./Label-Cf_Zxug7.js";import"./SupportLabel-BvIpeXJE.js";import"./SuccessIcon-D4--Av7_.js";import"./Icon-CdurXeQd.js";import"./WarningIcon-Cl_1I_tP.js";import"./InputPanel-Ccsf_Inu.js";import"./Button-BpZ40Ip9.js";import"./usePreviousValue-Dn0aDgfo.js";import"./Loader-BYcEstZN.js";import"./useDelayedRender-DoLQv-oz.js";import"./Title-fyRjyj_N.js";import"./Card-3QvW3q14.js";import"./Text-DZ9ZZDLC.js";import"./Tag-Cp_wy5js.js";import"./ExpandablePanel-k5AvRHiV.js";import"./useAnimatedHeightBetween-DXqFxFKJ.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Guql3v0z.js";import"./Expander-CCOMJTjK.js";import"./ChevronDownIcon-DAEIR20r.js";import"./ChevronUpIcon-D6USy38t.js";import"./ListItem-DCzvUey4.js";const le={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
