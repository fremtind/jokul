import{r as p,j as i}from"./iframe-BHB5BHd7.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-CgDf56yh.js";import l from"./Help.stories-DQmmpSkC.js";import c from"./RadioButton.stories-DcoqM-ZA.js";import{F as d}from"./FieldGroup-DD4ybGUd.js";import{C as k,a as u}from"./CheckboxPanel.stories-ou2pTgdZ.js";import{RadioPanel as g}from"./RadioPanel.stories-BcjpTkrp.js";import{C as h}from"./Checkbox-C1_NkGbT.js";import{R as b}from"./RadioPanel-CvWy7COZ.js";import{H as x}from"./Help-DQ0VHsvJ.js";import{R as C}from"./RadioButton-D42XyCMu.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseRadioButton.stories-D7Y_zy0a.js";import"./BaseRadioButton-uDbMd0cH.js";import"./clsx-B-dksMZM.js";import"./useId-DNoFDi3_.js";import"./Label-Djg-fByQ.js";import"./SupportLabel-DRJf2zyz.js";import"./SuccessIcon-CdGo2RoI.js";import"./Icon-BQlM1nH5.js";import"./WarningIcon-DGNnnh8L.js";import"./InputPanel-C5FjlWoE.js";import"./Flex-CG07hs6S.js";import"./SlotComponent-CFhE0OSd.js";import"./mergeRefs-BTWuTdcW.js";import"./Button-DaZUs4tO.js";import"./usePreviousValue-D3faLaIR.js";import"./Loader-DwXLJ5_A.js";import"./useDelayedRender-CE-Nggc5.js";import"./Title-mDd6drs_.js";import"./Card-K1XOsNZA.js";import"./Text-CpjdTeNO.js";import"./Tag-CO1YMpYM.js";import"./ExpandablePanel-CcsjN95B.js";import"./useAnimatedHeightBetween-BwuzXCqw.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-DkJ5w15f.js";import"./Expander-D9jTMCvT.js";import"./ChevronDownIcon-q9Mi1243.js";import"./ChevronUpIcon-DBunUi2s.js";import"./ListItem-Cc1kpcnf.js";const ie={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
