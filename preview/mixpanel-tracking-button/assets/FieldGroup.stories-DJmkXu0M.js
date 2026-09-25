import{r as n,j as i}from"./iframe-CjrhAHw5.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-BLkvGzJH.js";import{CheckboxStory as c}from"./Checkbox.stories-BK5uPvtD.js";import d from"./Help.stories-DJoGgnGG.js";import k from"./RadioButton.stories-CVuje9ut.js";import{RadioPanel as u}from"./RadioPanel.stories-B-zZEuCC.js";import{F as g}from"./FieldGroup-D9QdjfjM.js";import{C as h}from"./Checkbox-CWKouuur.js";import{R as b}from"./RadioPanel-DGXS035J.js";import{H as x}from"./Help-CUoYN0A9.js";import{R as C}from"./RadioButton-CF9vrCSR.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-BXNJimka.js";import"./clsx-B-dksMZM.js";import"./Flex-DUzMMihe.js";import"./SlotComponent-DUe3Ri1w.js";import"./mergeRefs-DXwMFtcf.js";import"./Button-BihJ0c9e.js";import"./usePreviousValue-guv031Tv.js";import"./Loader-BQFRkkP-.js";import"./useDelayedRender-BsZzAOCS.js";import"./useId-BM_4qXBS.js";import"./Label-DKFjT2oH.js";import"./SupportLabel-ICXFRRrs.js";import"./SuccessIcon-DemPS5uu.js";import"./Icon-DmKuDIHE.js";import"./WarningIcon-CyToQ6q3.js";import"./BaseRadioButton.stories-CrlguHQF.js";import"./BaseRadioButton-B4rb5Y_E.js";import"./Title-CYIPfaoe.js";import"./Card-BeukE0ns.js";import"./Text-n6N_qfLD.js";import"./Tag-BI7fMzFo.js";import"./ExpandablePanel-CLs5Gsis.js";import"./useAnimatedHeightBetween-B_H-XtWE.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-Cym8pBEw.js";import"./Expander-DbJy6_Q8.js";import"./ChevronUpIcon-BqG7NVTX.js";import"./ListItem--WEQdk70.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
