import{r as p,j as i}from"./iframe-CMWm1_2H.js";import{c as n}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CATdPMdD.js";import{CheckboxStory as c}from"./Checkbox.stories-DLgt1Ftk.js";import d from"./Help.stories-DJ1QCYe_.js";import k from"./RadioButton.stories-UMW7T1vA.js";import{RadioPanel as u}from"./RadioPanel.stories-p8HpiiyK.js";import{F as g}from"./FieldGroup-DEZqPZQ8.js";import{C as h}from"./Checkbox-CchxtwiE.js";import{R as b}from"./RadioPanel-D35n7K2C.js";import{H as x}from"./Help-9k9x4gk2.js";import{R as C}from"./RadioButton-BJ6iy1At.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-D2LB9OqJ.js";import"./clsx-B-dksMZM.js";import"./Flex-DVf9PiQ6.js";import"./SlotComponent-Di1Yzm_7.js";import"./mergeRefs-BnYbhGdp.js";import"./Button-ejcdQbT0.js";import"./usePreviousValue-CxEhaRGS.js";import"./serializeTracking-CnAc4iKu.js";import"./Loader-C_7FNSUx.js";import"./useDelayedRender-DV_O7LSM.js";import"./useId-BSrxulkz.js";import"./Label-5MA_LTDv.js";import"./SupportLabel-Ca5pZ2nR.js";import"./SuccessIcon-Boe5fYOr.js";import"./Icon-CmoS3fyI.js";import"./WarningIcon-C6TBqqpD.js";import"./BaseRadioButton.stories-BuHDkLsB.js";import"./BaseRadioButton-D8sAKHI6.js";import"./Title-wiXU-W97.js";import"./Card-BdwFtaIs.js";import"./Text-DBEW7uK9.js";import"./Tag-4F1d3Z9X.js";import"./ExpandablePanel-hPnn1kwt.js";import"./useAnimatedHeightBetween-C9bS9EZD.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-CcQJxPmV.js";import"./Expander-uOtVuPx3.js";import"./ChevronUpIcon-C11gCDOf.js";import"./ListItem-gyeQlIM0.js";const ie={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:n.map(e=>p.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:n.map(e=>p.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
