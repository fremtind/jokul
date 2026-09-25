import{r as n,j as i}from"./iframe-we_xkgWE.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-CJ-L5mtl.js";import{CheckboxStory as c}from"./Checkbox.stories-Bdt1Wr67.js";import d from"./Help.stories-2QZ0NFXu.js";import k from"./RadioButton.stories-DYYxxyo3.js";import{RadioPanel as u}from"./RadioPanel.stories-dD8v1s8D.js";import{F as g}from"./FieldGroup-Bodbn043.js";import{C as h}from"./Checkbox-BkQZI-tS.js";import{R as b}from"./RadioPanel-C3KD33CF.js";import{H as x}from"./Help-iAIKbWrI.js";import{R as C}from"./RadioButton-OVT8sg03.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-mgF-NOHq.js";import"./clsx-B-dksMZM.js";import"./Flex-Di6F_dH6.js";import"./SlotComponent-Dfip4CzP.js";import"./mergeRefs-DDDok1_8.js";import"./Button-DZlCIb5H.js";import"./usePreviousValue-BIXYGyk9.js";import"./Loader-r96MG7UV.js";import"./useDelayedRender-C5txGHwS.js";import"./useId-B-7UN-bV.js";import"./Label-DQk_i7DM.js";import"./SupportLabel-DeIZCBo5.js";import"./SuccessIcon-CR2W_vgi.js";import"./Icon-Bb2e28Ou.js";import"./WarningIcon-C63Lqu98.js";import"./BaseRadioButton.stories-DtApaura.js";import"./BaseRadioButton-BQojui1c.js";import"./Title-BkY4j0_A.js";import"./Card-CVYSRAXD.js";import"./Text-C3GdfSK7.js";import"./Tag-BY-ISZtL.js";import"./ExpandablePanel-CJxATB5E.js";import"./useAnimatedHeightBetween-Bag7saXr.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-qh0dxgAR.js";import"./Expander-BF-YNHUX.js";import"./ChevronUpIcon-6mEL_hhi.js";import"./ListItem-CU4zeCH9.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
