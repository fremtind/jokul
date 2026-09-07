import{r as p,j as i}from"./iframe-AvrK8vCh.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DJMZiIH9.js";import l from"./Help.stories-D5hVZeT0.js";import c from"./RadioButton.stories-DIULkFyX.js";import{F as d}from"./FieldGroup-gOSlnoqt.js";import{C as k,a as u}from"./CheckboxPanel.stories-BGStydwg.js";import{RadioPanel as g}from"./RadioPanel.stories-CfUb08XG.js";import{C as h}from"./Checkbox-DFUObb-D.js";import{R as b}from"./RadioPanel-DId_7wlq.js";import{H as x}from"./Help-kbiyFSNw.js";import{R as C}from"./RadioButton-BPhP9g5w.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-COdDbISF.js";import"./BaseRadioButton-DSBsC1Ls.js";import"./clsx-B-dksMZM.js";import"./useId-y4F-Ypl6.js";import"./Label-C4s5o-u8.js";import"./SupportLabel-DgPtNCAk.js";import"./SuccessIcon-DC1b8d0s.js";import"./Icon-C_6paShe.js";import"./WarningIcon-PNEEfr3g.js";import"./InputPanel-CpAfUKXU.js";import"./Flex-B_3CYuZk.js";import"./SlotComponent-0saBRD3j.js";import"./mergeRefs-Yeq-_4oz.js";import"./Button-X456Jz6W.js";import"./usePreviousValue-hYepWMjU.js";import"./Loader-9xuKl4Ll.js";import"./useDelayedRender-DqCQWCuH.js";import"./Title-5Gg4a3q2.js";import"./Card-CqSyLBey.js";import"./Text-Dy_x-TSp.js";import"./Tag-D3A9GMmU.js";import"./ExpandablePanel-cpm5fZpL.js";import"./useAnimatedHeightBetween-DFT_RFpH.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DGVt7upQ.js";import"./Expander-Jg_sT9Ml.js";import"./ChevronDownIcon-BHRUDAbf.js";import"./ChevronUpIcon-CtrbOrX6.js";import"./ListItem-B8fL9uys.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
