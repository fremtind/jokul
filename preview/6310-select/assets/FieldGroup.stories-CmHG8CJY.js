import{r as p,j as i}from"./iframe-DeU_jz5T.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DaOBYb1r.js";import l from"./Help.stories-PD08Zq02.js";import c from"./RadioButton.stories-n9ul_8LG.js";import{F as d}from"./FieldGroup-BoYkduC-.js";import{C as k,a as u}from"./CheckboxPanel.stories-BBUs0NN3.js";import{RadioPanel as g}from"./RadioPanel.stories-Q1kaYKoN.js";import{C as h}from"./Checkbox-CQcVb0Mu.js";import{R as b}from"./RadioPanel-e022Py28.js";import{H as x}from"./Help-Bv86iaEX.js";import{R as C}from"./RadioButton-DcdRmk1o.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-CKAhtmg_.js";import"./BaseRadioButton-I5odcxpc.js";import"./clsx-B-dksMZM.js";import"./useId-D1EaGqVn.js";import"./Label-Uhc6onVe.js";import"./SupportLabel-D6WH4HtN.js";import"./SuccessIcon-Dw5j53cK.js";import"./Icon-CsOx2wbX.js";import"./WarningIcon-O4UeoV9V.js";import"./InputPanel-sAB6drba.js";import"./Flex-B2OKBrk5.js";import"./SlotComponent-45dS-1-q.js";import"./mergeRefs-Z7RJNsgH.js";import"./Button-cx3l3wSO.js";import"./usePreviousValue-X21xUB41.js";import"./Loader-ymyGowYG.js";import"./useDelayedRender-CG34Sq48.js";import"./Title-BTUVY1rY.js";import"./Card-CHkvbthn.js";import"./Text-CUEQclCW.js";import"./Tag-Cy48WQ6t.js";import"./ExpandablePanel-oUxvsr-G.js";import"./useAnimatedHeightBetween-DSFVo6wo.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Ct0wYjxq.js";import"./Expander-KNVmrDbT.js";import"./ChevronDownIcon-BOHy76oG.js";import"./ChevronUpIcon-BX1Ni0lm.js";import"./ListItem-DtCKySXF.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
