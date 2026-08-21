import{r as n,j as i}from"./iframe-EgNOXUy9.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BqwKXhBm.js";import l from"./Help.stories-CQe3vxpL.js";import c from"./RadioButton.stories-BSLXi9Nq.js";import{F as d}from"./FieldGroup-9tDG96vf.js";import{C as k,a as u}from"./CheckboxPanel.stories-DIlK4R5f.js";import{RadioPanel as g}from"./RadioPanel.stories-Bki6yNCf.js";import{C as h}from"./Checkbox-C1DaKMcg.js";import{R as b}from"./RadioPanel-FHUzwzE1.js";import{H as x}from"./Help-Dk4bBHb6.js";import{R as C}from"./RadioButton-BqnDmKFb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-BznUtKZs.js";import"./Label-DiZbk3_b.js";import"./SupportLabel-DJV9oCxV.js";import"./SuccessIcon-CRQt1IeK.js";import"./Icon-HTmz1PvZ.js";import"./WarningIcon-kG3MwAwB.js";import"./BaseRadioButton.stories-DwWZZTQF.js";import"./BaseRadioButton-CW4DtTc8.js";import"./InputPanel-D4FTMH7_.js";import"./Flex-4uoIF9Tm.js";import"./SlotComponent-D7i_zz7X.js";import"./mergeRefs-BWLklSIA.js";import"./Button-B1fP-Iq3.js";import"./usePreviousValue-QIcyhSdh.js";import"./Loader-Cjfs_n1u.js";import"./useDelayedRender-Cdqj4ygo.js";import"./Title-DqDvgJM0.js";import"./Card-CuvRTp3V.js";import"./Text-BO-Z21Gf.js";import"./Tag-BxI5kE5s.js";import"./ExpandablePanel-D4B1hQVG.js";import"./useAnimatedHeightBetween-ByFVLk_O.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-jh4YN-rS.js";import"./Expander-Cmk1y2o9.js";import"./ChevronUpIcon-CjTARwnR.js";import"./ListItem-DQCiO_1N.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
