import{r as p,j as i}from"./iframe-daRGE8mS.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BcfmRaZq.js";import l from"./Help.stories-BhOrm9sU.js";import c from"./RadioButton.stories-C-gbXu4G.js";import{F as d}from"./FieldGroup-TZn33BUI.js";import{C as k,a as u}from"./CheckboxPanel.stories-DeJYYl1w.js";import{RadioPanel as g}from"./RadioPanel.stories-DVmJK7yF.js";import{C as h}from"./Checkbox-BTfdN1uW.js";import{R as b}from"./RadioPanel-Dla22tpl.js";import{H as x}from"./Help-kYSG_4Ch.js";import{R as C}from"./RadioButton-DpmZSZxC.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-BJ-IeTa8.js";import"./BaseRadioButton-CNJY5NAu.js";import"./clsx-B-dksMZM.js";import"./useId-BeY5JCOw.js";import"./Label-Be2Cn3ue.js";import"./SupportLabel-yfOpiaUT.js";import"./SuccessIcon-Bh-LIgAH.js";import"./Icon-B5xy_g0j.js";import"./WarningIcon-C9x-yLpW.js";import"./InputPanel-C1ZT3fez.js";import"./Flex-62OkLOF2.js";import"./SlotComponent-BEhS7ZuL.js";import"./mergeRefs-DWPxadxO.js";import"./Button-jhD2gAA8.js";import"./usePreviousValue-4UW1e3Un.js";import"./Loader-CUVBf0XN.js";import"./useDelayedRender-t6RFYw8f.js";import"./Title-qEV7rVF9.js";import"./Card-JSca_Mnj.js";import"./Text-Bguu3AUJ.js";import"./Tag-BKCvWtxq.js";import"./ExpandablePanel-BeqCBRma.js";import"./useAnimatedHeightBetween-sKviDfRR.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-vEfR52cs.js";import"./Expander-Dh7D8K2S.js";import"./ChevronDownIcon-Cn-hX6RX.js";import"./ChevronUpIcon-Rld2liOk.js";import"./ListItem-DWXpAkam.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
