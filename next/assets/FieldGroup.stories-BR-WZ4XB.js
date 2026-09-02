import{r as n,j as i}from"./iframe-ctCUr1dU.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-BduCNyHR.js";import l from"./Help.stories-B7-YzAEG.js";import c from"./RadioButton.stories-qRYu5IbA.js";import{F as d}from"./FieldGroup-BOTt8BVZ.js";import{C as k,a as u}from"./CheckboxPanel.stories-VaLfRHRU.js";import{RadioPanel as g}from"./RadioPanel.stories-DSYpgXRx.js";import{C as h}from"./Checkbox-BrSo1WXa.js";import{R as b}from"./RadioPanel-Cg8XLWy0.js";import{H as x}from"./Help-CQwwFjFL.js";import{R as C}from"./RadioButton-BDPGYSAb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId-Cr31zXjN.js";import"./Label-BKY0mSgP.js";import"./SupportLabel-CU5Ixuht.js";import"./SuccessIcon-kRyEJpks.js";import"./Icon-C9UxPlIN.js";import"./WarningIcon-BhQqkk1u.js";import"./BaseRadioButton.stories-DVEWrl2t.js";import"./BaseRadioButton-CZP41jJV.js";import"./InputPanel-B7kGxxg4.js";import"./Flex-DDk4fDsT.js";import"./SlotComponent-BLov-DsE.js";import"./mergeRefs-DWWtGrDH.js";import"./Button-DRXZTY8j.js";import"./usePreviousValue-EKFw11i8.js";import"./Loader-BSlP3Zil.js";import"./useDelayedRender-DMgw_bOA.js";import"./Title-DGJ-OF1A.js";import"./Card-D4JU4UTb.js";import"./Text-BIZAcXjS.js";import"./Tag-BuJqW_tv.js";import"./ExpandablePanel-DRnXMN5w.js";import"./useAnimatedHeightBetween-CrbZcnw7.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-Bu42Al17.js";import"./Expander-CI4YDpCr.js";import"./ChevronUpIcon-BKJN3I0J.js";import"./ListItem-WNS9cQfR.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
