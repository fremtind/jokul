import{r as n,j as i}from"./iframe-DswP06gc.js";import{c as p}from"./contactChoices-BqDGeJnV.js";import{CheckboxStory as s}from"./Checkbox.stories-DoS_sCfq.js";import l from"./Help.stories-Csc3hkQv.js";import c from"./RadioButton.stories-CkaMRfK4.js";import{F as d}from"./FieldGroup-B6PV-m5L.js";import{C as k,a as u}from"./CheckboxPanel.stories-PGmNQIPb.js";import{RadioPanel as g}from"./RadioPanel.stories-DutfayMf.js";import{C as h}from"./Checkbox-Bd8WyxwS.js";import{R as b}from"./RadioPanel-BFbSJx-A.js";import{H as x}from"./Help-B-OTqSTt.js";import{R as C}from"./RadioButton-D1FZoQE4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./useId--LGxGzgz.js";import"./Label-DeYMq8wC.js";import"./SupportLabel-ClaKdzyU.js";import"./SuccessIcon-CsC4AR_5.js";import"./Icon-BGKGFXgk.js";import"./WarningIcon-BNmWOxQr.js";import"./BaseRadioButton.stories-DTswrWVC.js";import"./BaseRadioButton-DoVs3gFn.js";import"./InputPanel-BKjH_W32.js";import"./Flex-B_guxFmo.js";import"./SlotComponent-z_sQQmzz.js";import"./mergeRefs-DZDnXAPv.js";import"./Button-COlRpsDp.js";import"./usePreviousValue-D66EvE0a.js";import"./Loader-BtLETZ0K.js";import"./useDelayedRender-DvnNnagX.js";import"./Title-oLPtlLCW.js";import"./Card-CPoBK5VI.js";import"./Text-CWX3Hxjx.js";import"./Tag-CV6mSupZ.js";import"./ExpandablePanel-CBHn3Kl8.js";import"./useAnimatedHeightBetween-CeK5M8e6.js";import"./tokens-CW-NfdIE.js";import"./useBrowserPreferences-2tsbhFlF.js";import"./Expander-OGhADcmg.js";import"./ChevronUpIcon-YoVXEk84.js";import"./ListItem-D0-u417z.js";const pe={title:"Komponenter/Field Group",component:d,args:{legend:"Velg kontaktmetode",description:"Vi kontakter deg bare ved nødtilfeller",errorLabel:"",name:"Kontaktmetode(r)",labelProps:{srOnly:!1},children:p.map(e=>n.createElement(C,{...c.args,key:e,value:e,name:"Kontaktmetode(r)"},e))}},o={name:"Radio gruppe"},r={name:"Checkbox gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(h,{...s.args,key:e,value:e,name:"kontaktmetode"},e))}},a={name:"Checkbox panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(k,{...u.args,key:e,value:e,name:"kontaktmetode",label:e},e))}},t={name:"Radio panel gruppe",args:{legend:"Velg kontaktmetoder",children:p.map(e=>n.createElement(b,{...g.args,key:e,value:e,name:"kontaktmetode",label:e}))}},m={name:"Field Group med tooltip",args:{tooltip:i.jsx(x,{...l.args})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
