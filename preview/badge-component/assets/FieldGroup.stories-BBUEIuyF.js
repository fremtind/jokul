import{r as n,j as i}from"./iframe-Cbeeo7Ic.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{C as s,a as l}from"./CheckboxPanel.stories-76EXptr5.js";import{CheckboxStory as c}from"./Checkbox.stories-CRlaQCAJ.js";import d from"./Help.stories-DXFpjGkj.js";import k from"./RadioButton.stories-BG_cDXLZ.js";import{RadioPanel as u}from"./RadioPanel.stories-B8g7Z3Fo.js";import{F as g}from"./FieldGroup-CkyrsE71.js";import{C as h}from"./Checkbox-asKt8mMl.js";import{R as b}from"./RadioPanel-Bes1scJ5.js";import{H as x}from"./Help-DFqXcX45.js";import{R as C}from"./RadioButton-D1VJ-mAz.js";import"./preload-helper-PPVm8Dsz.js";import"./InputPanel-Jf9yfo_r.js";import"./clsx-B-dksMZM.js";import"./Flex-Bg5Sqpn_.js";import"./SlotComponent-Br07Hy2p.js";import"./mergeRefs-ovFgSb0R.js";import"./Button-CX1XSdDq.js";import"./usePreviousValue-aT0IzFlJ.js";import"./Loader-C_4FyN7X.js";import"./useDelayedRender-DhfLyubH.js";import"./useId-DrrweFT-.js";import"./Label-aWanfdAO.js";import"./SupportLabel-BUnBxVTA.js";import"./SuccessIcon-D7zBlp3m.js";import"./Icon-u9eTAKHn.js";import"./WarningIcon-B9NpK-QK.js";import"./BaseRadioButton.stories-CI-Psb7M.js";import"./BaseRadioButton-Dix0S-kZ.js";import"./Title-CgZesyRV.js";import"./Card-DAlDA91b.js";import"./Text-Cp0whPuk.js";import"./Tag-BdXXHTUq.js";import"./ExpandablePanel-CW_9Ycvg.js";import"./useAnimatedHeightBetween-B7oiLmSF.js";import"./tokens-HKQN8Vn-.js";import"./useBrowserPreferences-DChu90Eu.js";import"./Expander-x6jdnkQj.js";import"./ChevronUpIcon-VLRqnZgU.js";import"./ListItem-Be34vs5N.js";const pe={title:"Komponenter/Field Group",component:g,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...k.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...c.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(s,{...l.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...u.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...d.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
